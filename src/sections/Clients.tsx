"use client";

import { useRef } from "react";
import SmartImage from "@/components/Media/SmartImage";
import SectionHeading from "@/components/SectionHeading";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { clients } from "@/data";

export default function Clients() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // fromTo (not from) so the tiles always land on an explicit opacity: 1
      // instead of inheriting whatever the class list happens to compute to.
      gsap.fromTo(
        "[data-client-item]",
        { opacity: 0, y: prefersReducedMotion() ? 0 : 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: "[data-client-grid]",
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="shell section-pad bg-background">
      <SectionHeading eyebrow={clients.eyebrow} title={clients.heading} />

      <p className="body-base mt-6 max-w-2xl text-white/70">{clients.intro}</p>

      <ul
        data-client-grid
        className="mt-[clamp(2.5rem,2rem+2vw,5rem)] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {clients.clients.map((client) => (
          <li
            key={client.id}
            data-client-item
            title={client.name}
            className="group flex aspect-[3/2] items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors duration-500 hover:border-accent/50 sm:p-6"
          >
            {/* The dim/brighten lives on the logo, not the tile: GSAP animates
                the tile's opacity, and the inline style it writes would
                outrank any opacity utility class on the same element. */}
            <SmartImage
              src={client.logo}
              alt={`${client.name} logo`}
              fit="contain"
              className="h-full w-full opacity-85 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
