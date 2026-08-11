"use client";

import { useRef } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/Media/SmartImage";
import { gsap, useGSAP, prefersReducedMotion, scrollFadeUp } from "@/lib/gsap";
import { location } from "@/data";

/** Vicinity map + address details. Used on the landing page and About page. */
export default function Location() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      scrollFadeUp("[data-location-item]", {
        trigger: root.current?.querySelector("[data-location-grid]"),
        stagger: 0.12,
        y: 28,
      });
      if (!prefersReducedMotion()) {
        gsap.from("[data-location-map]", {
          opacity: 0,
          scale: 1.04,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current?.querySelector("[data-location-map]"),
            start: "top 85%",
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} className="shell section-pad bg-background">
      <SectionHeading eyebrow={location.eyebrow} title={location.heading} />

      <div
        data-location-grid
        className="mt-[clamp(2.5rem,2rem+2vw,5rem)] grid gap-10 lg:grid-cols-[minmax(0,34%)_1fr] lg:gap-[clamp(2.5rem,2rem+2vw,4.5rem)]"
      >
        {/* Details */}
        <div className="flex flex-col gap-8">
          <p data-location-item className="body-base text-white/70">
            {location.intro}
          </p>

          <div data-location-item className="flex gap-4">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <MapPin className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div className="flex flex-col gap-1.5">
              <p className="label text-accent">Office Address</p>
              <p className="body-sm text-white/80">{location.address}</p>
            </div>
          </div>

          <dl
            data-location-item
            className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-1"
          >
            {location.facts.map((fact) => (
              <div
                key={fact.id}
                className="flex flex-col gap-1.5 border-b border-white/10 py-5 pr-6 pl-5"
              >
                <dt className="label text-white/45">{fact.label}</dt>
                <dd className="body-sm text-white/85">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a
            data-location-item
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="label group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-white transition-colors duration-300 hover:border-accent hover:bg-accent 2xl:px-8 2xl:py-4"
          >
            {location.directionsLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Vicinity map */}
        <div
          data-location-map
          className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
        >
          <SmartImage
            src={location.mapImage}
            alt={location.mapAlt}
            fit="contain"
            className="aspect-[3/2] w-full"
          />
        </div>
      </div>
    </section>
  );
}
