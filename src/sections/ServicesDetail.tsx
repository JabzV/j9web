"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { services } from "@/data";

export default function ServicesDetail() {
  const root = useRef<HTMLElement>(null);
  const allServices = services.columns.flatMap((c) => c.services);

  useGSAP(
    () => {
      gsap.from("[data-detail-card]", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="shell bg-background py-[clamp(3rem,2rem+3vw,6rem)]">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
        {allServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              data-detail-card
              data-cursor="hover"
              className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.05] 2xl:gap-6 2xl:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 group-hover:bg-accent group-hover:text-white 2xl:h-[4.5rem] 2xl:w-[4.5rem]">
                  <Icon className="h-6 w-6 2xl:h-8 2xl:w-8" strokeWidth={1.5} />
                </span>
                <span className="font-display text-4xl leading-none text-white/10 2xl:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="display-sm text-white">{service.title}</h3>
              <p className="body-sm text-white/60">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
