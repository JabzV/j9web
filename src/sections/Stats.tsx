"use client";

import { useRef } from "react";
import { scrollCountUp, scrollFadeUp, useGSAP } from "@/lib/gsap";
import { stats } from "@/data";

/**
 * Full-bleed stat band. Lives between the hero video and the info panel, so
 * it runs edge to edge rather than inside `.shell` — the video above and the
 * blueprint panel below are both full width, and a gutter here would break
 * that column of bands.
 */
export default function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      scrollFadeUp("[data-stat]", {
        trigger: root.current,
        stagger: 0.08,
        y: 20,
      });

      // Count-ups are keyed off the rendered value node, not the cell, so a
      // non-numeric stat like "24/7" simply keeps its static text.
      stats.forEach((stat) => {
        if (stat.countTo === undefined) return;
        const el = root.current?.querySelector<HTMLElement>(
          `[data-stat-value="${stat.id}"]`,
        );
        if (el) scrollCountUp(el, stat.countTo, { suffix: stat.suffix });
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 md:grid-cols-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-background px-5 py-7 2xl:py-10"
          >
            {/* The fade runs on this inner wrapper, not the cell: the cell's
                black has to stay opaque or the grid's `bg-white/10` (which
                paints the hairline dividers through the gaps) shows through
                and the card reads gray until the animation finishes. */}
            <div
              data-stat
              className="flex items-center justify-center gap-4 sm:gap-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 2xl:h-16 2xl:w-16">
                <Icon className="h-5 w-5 2xl:h-7 2xl:w-7" strokeWidth={1.5} />
              </span>
              <div className="flex min-w-0 flex-col">
                <span
                  data-stat-value={stat.id}
                  className="font-display text-[clamp(1.75rem,1.4rem+1.4vw,3.25rem)] leading-none text-accent"
                >
                  {stat.value}
                </span>
                <span className="body-sm text-white/55">{stat.label}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
