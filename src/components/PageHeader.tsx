"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Shared page hero used across subpages to keep the visual language cohesive:
 * eyebrow + oversized Bebas title, sitting below the fixed navbar.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-ph-eyebrow]", { opacity: 0, y: 16, duration: 0.6 })
        .from(
          "[data-ph-title]",
          { opacity: 0, yPercent: 40, duration: 0.9 },
          "-=0.3"
        )
        .from(
          "[data-ph-desc]",
          { opacity: 0, y: 16, duration: 0.6 },
          "-=0.5"
        );
    },
    { scope: root }
  );

  return (
    <header
      ref={root}
      className="relative overflow-hidden border-b border-white/10 bg-background pb-[clamp(4rem,3rem+3vw,8rem)] pt-[clamp(9rem,7rem+6vw,16rem)]"
    >
      {/* subtle red glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-[140px]" />
      <div className="shell">
        <p data-ph-eyebrow className="label mb-4 text-accent">
          {eyebrow}
        </p>
        <div className="overflow-hidden">
          <h1 data-ph-title className="display-lg text-white">
            {title}
          </h1>
        </div>
        {description && (
          <p data-ph-desc className="body-base mt-6 max-w-2xl text-white/60 2xl:max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
