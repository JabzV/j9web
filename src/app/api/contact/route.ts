import { NextResponse } from "next/server";

/**
 * Contact-form handler. Posts the lead to Resend's REST API directly — no SDK
 * dependency, since this is a single fetch.
 *
 * The API key is read from the environment at request time and never reaches
 * the client. Do not import anything from this file into a component.
 */

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Per-field caps, so a bot can't post a megabyte of text into the inbox. */
const LIMITS: Record<string, number> = {
  name: 100,
  phone: 40,
  email: 200,
  location: 200,
  message: 5000,
};

/**
 * Naive per-IP throttle. In-memory, so it resets on cold start and is per
 * instance — enough to blunt casual abuse, not a substitute for a real limiter
 * (Upstash Redis) if this ever gets targeted.
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

/** Escapes interpolated values so form input can't inject markup into the email. */
function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function send(payload: Record<string, unknown>, apiKey: string) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("[contact] missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: hidden from real users, so anything here is a bot. Return 200 so
  // the bot sees success and doesn't retry with a different shape.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const field = (key: string) =>
    typeof body[key] === "string" ? (body[key] as string).trim() : "";

  const name = field("name");
  const phone = field("phone");
  const email = field("email");
  const location = field("location");
  const message = field("message");

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, phone, email, and message." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  for (const [key, max] of Object.entries(LIMITS)) {
    if (field(key).length > max) {
      return NextResponse.json(
        { error: `Your ${key} is too long.` },
        { status: 400 },
      );
    }
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Location", location || "—"],
  ];

  const notification = `
    <div style="font-family:system-ui,sans-serif;max-width:600px">
      <h2 style="margin:0 0 4px">New estimate request</h2>
      <p style="margin:0 0 20px;color:#666;font-size:13px">
        Submitted from the J9 Design and Build website.
      </p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `<tr>
              <td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap">${label}</td>
              <td style="padding:6px 0"><strong>${esc(value)}</strong></td>
            </tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 6px;font-size:14px">Message</h3>
      <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(message)}</p>
    </div>
  `;

  try {
    await send(
      {
        from,
        to: [to],
        // Replying in Gmail goes straight to the client, not to the sender address.
        reply_to: email,
        subject: `New estimate request — ${name}`,
        html: notification,
      },
      apiKey,
    );
  } catch (err) {
    console.error("[contact] notification failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your request. Please call or email us instead." },
      { status: 502 },
    );
  }

  // Auto-acknowledgement. Only possible from a verified domain — Resend's shared
  // test sender refuses any recipient but the account owner, so this stays off
  // until CONTACT_FROM_EMAIL is on a real domain. A failure here must not fail
  // the request: the lead is already delivered.
  if (process.env.CONTACT_AUTOREPLY === "true") {
    try {
      await send(
        {
          from,
          to: [email],
          reply_to: to,
          subject: "We received your request — J9 Design and Build",
          html: `
            <div style="font-family:system-ui,sans-serif;max-width:600px;font-size:14px;line-height:1.6">
              <p>Hi ${esc(name)},</p>
              <p>
                Thank you for reaching out to J9 Design and Build. We've received your
                request and a member of our team will get back to you shortly.
              </p>
              <p>If it's urgent, you can reach us directly at 0991 411 1242.</p>
              <p style="margin-top:24px">— J9 Design and Build</p>
            </div>
          `,
        },
        apiKey,
      );
    } catch (err) {
      console.error("[contact] auto-reply failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
