"use client";

import { useRef } from "react";
import SmartImage from "@/components/Media/SmartImage";
import SectionHeading from "@/components/SectionHeading";
import { gsap, useGSAP } from "@/lib/gsap";
import { services } from "@/data";
import type { Service } from "@/data/types";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div
      data-service-card
      data-cursor="hover"
      className="group/card flex items-start gap-4 rounded-xl border border-white/5 bg-black/35 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-black/60 2xl:gap-5 2xl:p-6"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 group-hover/card:bg-accent group-hover/card:text-white 2xl:h-16 2xl:w-16">
        <Icon className="h-5 w-5 2xl:h-7 2xl:w-7" strokeWidth={1.6} />
      </span>
      <div className="flex flex-col gap-1 pt-1">
        <h3 className="display-sm text-white">{service.title}</h3>
        <p className="body-sm text-white/60">{service.description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-service-col]", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-service-grid]", start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-background pt-[var(--space-section)]">
      <div className="shell">
        <SectionHeading eyebrow={services.eyebrow} title={services.heading} />
      </div>

      {/* Full-bleed columns; on lg+ the hovered column expands */}
      <div
        data-service-grid
        className="mt-[clamp(2.5rem,2rem+2vw,5rem)] flex flex-col md:flex-row"
      >
        {services.columns.map((col, i) => (
          <div
            key={i}
            data-service-col
            className="group relative min-h-[480px] flex-1 overflow-hidden transition-[flex-grow] duration-700 ease-out md:min-h-[680px] md:hover:flex-[1.35] 2xl:min-h-[840px]"
          >
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
              <SmartImage src={col.image} alt="" className="h-full w-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/15 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative flex h-full flex-col justify-end gap-3 p-5 md:gap-4 md:p-6 2xl:gap-5 2xl:p-10">
              {col.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
