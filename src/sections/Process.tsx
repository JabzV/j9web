"use client";

import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { scrollFadeUp, useGSAP } from "@/lib/gsap";
import { processContent } from "@/data";

/** About-page section walking through the four project phases. */
export default function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      scrollFadeUp("[data-process-step]", {
        trigger: root.current?.querySelector("[data-process-list]"),
        stagger: 0.12,
        y: 32,
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="shell section-pad bg-background">
      <SectionHeading eyebrow={processContent.eyebrow} title={processContent.heading} />

      <p className="body-base mt-6 max-w-2xl text-white/70">{processContent.intro}</p>

      <ol
        data-process-list
        className="mt-[clamp(2.5rem,2rem+2vw,5rem)] grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {processContent.steps.map((step, i) => (
          <li
            key={step.id}
            data-process-step
            className="flex flex-col gap-4 bg-background p-[clamp(1.5rem,1.25rem+1.5vw,2.5rem)]"
          >
            <span className="display-sm text-accent/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-medium text-white/90">{step.title}</h3>
            <p className="body-sm text-white/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
