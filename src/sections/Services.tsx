"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/Media/SmartImage";
import SectionHeading from "@/components/SectionHeading";
import { gsap, useGSAP } from "@/lib/gsap";
import { services } from "@/data";

/**
 * Editorial service index: a numbered list of every service with a sticky
 * image preview that crossfades to whichever row is hovered/focused.
 * On mobile the preview is hidden and each row carries its description.
 */
export default function Services() {
  const root = useRef<HTMLElement>(null);
  const allServices = services.columns.flatMap((c) => c.services);
  const [active, setActive] = useState(0);

  const activeService = allServices[active];
  const ActiveIcon = activeService.icon;

  useGSAP(
    () => {
      gsap.from("[data-service-row]", {
        opacity: 0,
        y: 36,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-service-list]", start: "top 80%" },
      });
      gsap.from("[data-service-preview]", {
        opacity: 0,
        clipPath: "inset(8% 8% 8% 8% round 1rem)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-service-list]", start: "top 80%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="bg-background pt-[var(--space-section)]"
    >
      <div className="shell">
        <SectionHeading eyebrow={services.eyebrow} title={services.heading} />

        <div className="mt-[clamp(2.5rem,2rem+2vw,4.5rem)] grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[clamp(2.5rem,1.5rem+3vw,7rem)]">
          {/* Sticky preview — desktop only */}
          <div
            data-service-preview
            className="relative hidden lg:sticky lg:top-[clamp(5.5rem,10svh,8rem)] lg:block"
          >
            <div className="relative aspect-[3/4] max-h-[78svh] w-full overflow-hidden rounded-2xl border border-white/10">
              {allServices.map((service, i) => (
                <div
                  key={service.id}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full"
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

              {/* Active service details */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 2xl:gap-3 2xl:p-9">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white 2xl:h-14 2xl:w-14">
                  <ActiveIcon
                    className="h-5 w-5 2xl:h-6 2xl:w-6"
                    strokeWidth={1.6}
                  />
                </span>
                <h3 className="display-sm text-white">{activeService.title}</h3>
                <p className="body-sm max-w-[42ch] text-white/70">
                  {activeService.description}
                </p>
              </div>

              {/* Ghost index number */}
              <span className="pointer-events-none absolute right-5 top-2 font-display text-[clamp(4rem,3rem+3vw,8rem)] leading-none text-white/15">
                {String(active + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Numbered index */}
          <div data-service-list className="flex flex-col">
            {allServices.map((service, i) => {
              const isActive = i === active;
              return (
                <Link
                  key={service.id}
                  href="/#contact"
                  data-service-row
                  data-cursor="hover"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-start gap-4 border-t border-white/10 py-[clamp(1.1rem,0.9rem+0.8vw,2rem)] transition-colors duration-300 last:border-b sm:gap-6 lg:items-center"
                >
                  <span
                    className={`label pt-1.5 tabular-nums transition-colors duration-300 lg:pt-0 ${
                      isActive ? "text-accent" : "text-white/30"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3
                      className={`display-sm transition-[color,transform] duration-300 ${
                        isActive
                          ? "text-white lg:translate-x-2"
                          : "text-white/55"
                      }`}
                    >
                      {service.title}
                    </h3>
                    {/* On mobile/tablet the preview panel is hidden, so the
                        description lives in the row itself */}
                    <p className="body-sm text-white/50 lg:hidden">
                      {service.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`mt-1 h-5 w-5 shrink-0 transition-all duration-300 lg:mt-0 2xl:h-6 2xl:w-6 ${
                      isActive
                        ? "translate-x-0 text-accent opacity-100"
                        : "-translate-x-2 translate-y-2 text-white/40 opacity-0"
                    }`}
                    strokeWidth={1.8}
                  />
                </Link>
              );
            })}

            {/* Section CTA */}
            <div className="mt-[clamp(1.75rem,1.25rem+1.5vw,3rem)] flex flex-wrap items-center justify-between gap-4">
              <p className="body-sm text-white/45">
                Have a different project in mind?
              </p>
              <Link
                href="/#contact"
                data-cursor="hover"
                className="label inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white transition-colors duration-300 hover:border-accent hover:bg-accent 2xl:px-7 2xl:py-4"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
