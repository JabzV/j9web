"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-[clamp(4rem,3rem+2vw,7rem)]">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Image
              src={site.logo}
              alt={site.name}
              width={150}
              height={46}
              className="h-11 w-auto self-start"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              {site.footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {site.footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-cursor="hover"
                      className="text-sm text-white/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA + socials */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Get in touch
            </h3>
            <Link
              href={site.contactCta.href}
              data-cursor="hover"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {site.contactCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <div className="mt-2 flex gap-3">
              {site.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-cursor="hover"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <p
          aria-hidden
          className="mt-[clamp(3rem,2rem+3vw,6rem)] select-none text-center font-display text-[clamp(4rem,10vw,16rem)] leading-[0.8] text-white/[0.045]"
        >
          J9 DESIGN & BUILD
        </p>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="body-sm text-white/40">{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
