import React from "react";
import "@/ui/custom_css/liquidGlass.css";

function ImagePlaceholder({
  style,
  className = "",
  size = 40,
}: {
  style?: React.CSSProperties;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`bg-neutral-700 flex items-center justify-center ${className}`}
      style={style}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

function AvatarPlaceholder({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#3a3a3a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="rgba(255,255,255,0.6)"
    >
      <rect x="1" y="5" width="18" height="9" rx="0.5" />
      <rect x="6.5" y="0" width="7" height="6" rx="0.5" />
      <rect x="8.5" y="8" width="3" height="6" rx="0.5" fill="#000" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" y1="10" x2="10" y2="2" />
      <polyline points="4,2 10,2 10,8" />
    </svg>
  );
}

const SF = "var(--font-sf-pro-rounded)";
const BEBAS = "var(--font-bebas-neue)";

export default function Home() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: 1024,
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* ── Background hero image ── */}
      <ImagePlaceholder
        size={60}
        style={{
          position: "absolute",
          inset: 0,
          top: 0,
          left: 0,
          right: 0,
          height: 681,
          borderRadius: 0,
        }}
      />

      {/* Gradient fade at the bottom of image into black */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 681,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.65) 75%, #000 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Topbar ── */}
      <nav
        style={{
          position: "absolute",
          top: 29,
          left: 53,
          right: 53,
          height: 47,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo placeholder */}
        <div
          style={{
            width: 153,
            height: 47,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              fontFamily: BEBAS,
              fontSize: 26,
              color: "#fff",
              letterSpacing: "0.12em",
            }}
          >
            J9 LOGO
          </span>
        </div>

        {/* Nav pill */}
        <div
          className="glass"
          style={{
            width: 400,
            height: 38,
            borderRadius: 99,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 24,
            paddingRight: 24,
            gap: 48,
          }}
        >
          {["Home", "About", "Services", "Projects"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: SF,
                fontSize: 15,
                color: "#fff",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact Us button */}
        <div
          style={{
            width: 154,
            height: 38,
            borderRadius: 99,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 24,
            paddingRight: 16,
            gap: 8,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: SF,
              fontSize: 15,
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </span>
          <div
            style={{
              width: 16,
              height: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowIcon />
          </div>
        </div>
      </nav>

      {/* ── Large heading: WE BUILD YOUR DREAMS ── */}
      <div
        style={{
          position: "absolute",
          top: 83,
          left: 53,
          width: 662,
        }}
      >
        <h1
          style={{
            fontFamily: BEBAS,
            fontSize: 112,
            lineHeight: 0.93,
            color: "#fff",
            letterSpacing: "0.01em",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          We Build
          <br />
          Your
          <br />
          Dreams
        </h1>
      </div>

      {/* ── Tagline ── */}
      <p
        style={{
          position: "absolute",
          top: 562,
          left: 53,
          width: 356,
          margin: 0,
          fontFamily: SF,
          fontSize: 13,
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        We build your dreams With{" "}
        <strong style={{ fontWeight: 600 }}>
          QUALITY, INTEGRITY, EXCELLENCE
        </strong>
        <br />
        Done by Licensed and Experienced Professionals
      </p>

      {/* ── White panel bottom-left with image ── */}
      <div
        style={{
          position: "absolute",
          top: 681,
          left: 0,
          width: 463,
          height: 343,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <ImagePlaceholder
          size={48}
          style={{
            width: "100%",
            height: 294,
            marginTop: 23,
            borderRadius: 0,
          }}
        />
      </div>

      {/* ── Center: "Let's Build Something Amazing Together" ── */}
      <h2
        style={{
          position: "absolute",
          top: 721,
          left: 588,
          width: 428,
          margin: 0,
          fontFamily: BEBAS,
          fontSize: 46,
          lineHeight: 1.15,
          color: "#fff",
          letterSpacing: "0.01em",
        }}
      >
        Let&apos;s Build Something Amazing Together
      </h2>

      {/* ── Center: description ── */}
      <p
        style={{
          position: "absolute",
          top: 882,
          left: 587,
          width: 355,
          margin: 0,
          fontFamily: SF,
          fontSize: 13,
          lineHeight: 1.65,
          color: "rgba(255,255,255,1)",
        }}
      >
        J9 Design and Build offers building plans, construction, and supply
        services, your all-in-one partner
      </p>

      {/* ── Stat card: Projects Done ── */}
      <div
        style={{
          position: "absolute",
          top: 730,
          left: 1140,
          width: 155,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Label row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 24,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BuildingIcon />
          </div>
          <span
            style={{
              fontFamily: SF,
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Projects Done
          </span>
        </div>

        {/* Number */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 91,
          }}
        >
          <span
            style={{
              fontFamily: BEBAS,
              fontSize: 80,
              lineHeight: 1,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            23+
          </span>
        </div>
      </div>

      {/* ── View Projects (overlapping avatars) ── */}
      <div
        style={{
          position: "absolute",
          top: 854,
          left: 1133,
          width: 144,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Overlapping avatar circles */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 68,
          }}
        >
          <div style={{ position: "relative", width: 108, height: 64 }}>
            {/* Back avatar */}
            <div
              style={{
                position: "absolute",
                left: 38,
                top: 2,
                width: 64,
                height: 64,
                borderRadius: 32,
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <AvatarPlaceholder />
            </div>
            {/* Front avatar */}
            <div
              style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 64,
                height: 64,
                borderRadius: 32,
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <AvatarPlaceholder />
            </div>
          </div>
        </div>

        {/* View Projects label */}
        <span
          style={{
            fontFamily: SF,
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            display: "block",
          }}
        >
          View Projects
        </span>
      </div>
    </section>
  );
}
