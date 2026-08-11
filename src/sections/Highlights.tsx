"use client";

import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { scrollFadeUp, useGSAP } from "@/lib/gsap";
import { highlights } from "@/data";

/** About-page section listing the company's key facts at a glance. */
export default function Highlights() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      scrollFadeUp("[data-highlight]", {
        trigger: root.current?.querySelector("[data-highlight-list]"),
        stagger: 0.1,
        y: 24,
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="shell section-pad bg-background">
      <SectionHeading eyebrow={highlights.eyebrow} title={highlights.heading} />

      <dl
        data-highlight-list
        className="mt-[clamp(2.5rem,2rem+2vw,5rem)] grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {highlights.highlights.map((highlight) => (
          <div
            key={highlight.id}
            data-highlight
            className="flex flex-col gap-2 border-b border-white/10 py-8 pr-8 pl-5 sm:border-r sm:pl-6"
          >
            <dt className="label text-accent">{highlight.label}</dt>
            <dd className="body-lg font-medium text-white/90">
              {highlight.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
