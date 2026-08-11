"use client";

import { useRef } from "react";
import Link from "next/link";
import SmartImage from "@/components/Media/SmartImage";
import SectionHeading from "@/components/SectionHeading";
import PillLink from "@/components/Buttons/PillLink";
import { scrollFadeUp, useGSAP } from "@/lib/gsap";
import { services } from "@/data";

/**
 * Service index as a card grid: cover photo, accent icon, title, blurb.
 * Card chrome matches the project cards so the two grids read as one family.
 */
export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      scrollFadeUp("[data-service-card]", {
        trigger: root.current?.querySelector("[data-service-grid]"),
        stagger: 0.08,
        y: 32,
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-background pt-[var(--space-section)]">
      <div className="shell">
        <SectionHeading eyebrow={services.eyebrow} title={services.heading} />

        <div
          data-service-grid
          className="mt-[clamp(2.5rem,2rem+2vw,4.5rem)] grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8"
        >
          {services.services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href="/#contact"
                data-service-card
                data-cursor="hover"
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-accent/40"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <SmartImage
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-6 2xl:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white 2xl:h-11 2xl:w-11">
                      <Icon
                        className="h-4 w-4 2xl:h-5 2xl:w-5"
                        strokeWidth={1.7}
                      />
                    </span>
                    <h3 className="display-sm text-white">{service.title}</h3>
                  </div>
                  <p className="body-sm text-white/60">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-[clamp(1.75rem,1.25rem+1.5vw,3rem)] flex flex-wrap items-center justify-between gap-4">
          <p className="body-sm text-white/45">
            Have a different project in mind?
          </p>
          <PillLink href="/#contact" label="Let's talk" size="sm" />
        </div>
      </div>
    </section>
  );
}
