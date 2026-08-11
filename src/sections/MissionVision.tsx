"use client";

import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { scrollFadeUp, useGSAP } from "@/lib/gsap";
import { missionVision } from "@/data";

/** About-page section pairing the company mission with its vision. */
export default function MissionVision() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      scrollFadeUp("[data-principle]", {
        trigger: root.current?.querySelector("[data-principle-grid]"),
        stagger: 0.14,
        y: 32,
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="shell section-pad bg-background">
      <SectionHeading
        eyebrow={missionVision.eyebrow}
        title={missionVision.heading}
      />

      <div
        data-principle-grid
        className="mt-[clamp(2.5rem,2rem+2vw,5rem)] grid gap-px bg-white/10 lg:grid-cols-2"
      >
        {missionVision.principles.map((principle) => (
          <article
            key={principle.id}
            data-principle
            className="flex flex-col gap-5 bg-background p-[clamp(1.75rem,1.25rem+2vw,3.5rem)]"
          >
            <p className="label text-accent">{principle.label}</p>
            <p className="body-base text-white/80">{principle.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
