"use client";

import { useRef } from "react";
import SmartImage from "@/components/Media/SmartImage";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { about } from "@/data";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      if (!reduced) {
        // Image settles into place with a subtle parallax
        gsap.from("[data-about-image]", {
          scale: 1.12,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });
        gsap.to("[data-about-image]", {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      gsap.from("[data-about-copy] > *", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-about-copy]", start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="shell section-pad bg-background"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,54%)_1fr] lg:gap-[clamp(3rem,2rem+3vw,7rem)]">
        {/* Image */}
        <div className="overflow-hidden">
          <div data-about-image className="will-change-transform">
            <SmartImage
              src={about.image}
              alt="J9 architectural design"
              className="aspect-[4/5] w-full sm:aspect-[785/934]"
            />
          </div>
        </div>

        {/* Copy */}
        <div data-about-copy className="flex flex-col gap-8 2xl:gap-10">
          <SectionHeading eyebrow={about.eyebrow} title={about.heading} />
          <p className="body-base max-w-xl text-white/80 2xl:max-w-2xl">
            {about.paragraph}
          </p>
          <Accordion items={about.differentiators} />
        </div>
      </div>
    </section>
  );
}
