"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/Media/SmartImage";
import SectionHeading from "@/components/SectionHeading";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { projects } from "@/data";

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  // Landing page shows featured projects only (all of them live on /projects)
  const featured = projects.projects
    .filter((p) => p.featured)
    .slice(0, projects.featuredCount);
  const showcase =
    featured.length > 0
      ? featured
      : projects.projects.slice(0, projects.featuredCount);

  const [active, setActive] = useState(showcase[0]?.id ?? "");
  const activeProject = showcase.find((p) => p.id === active) ?? showcase[0];

  useGSAP(
    () => {
      gsap.from("[data-project-row]", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-project-list]", start: "top 75%" },
      });
    },
    { scope: root },
  );

  const onHover = (id: string) => {
    if (id === active) return;
    setActive(id);
    if (!prefersReducedMotion()) {
      gsap.fromTo(
        "[data-project-preview]",
        { opacity: 0.35, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
      );
    }
  };

  return (
    <section ref={root} className="section-pad bg-background">
      <div className="shell mb-[clamp(2.5rem,2rem+2vw,5rem)] flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.heading}
          line={false}
        />
        <Link
          href="/projects"
          data-cursor="hover"
          className="group flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-accent hover:text-white 2xl:px-8 2xl:py-4 2xl:text-base"
        >
          View all {projects.projects.length} projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mx-auto grid max-w-[var(--shell-max)] lg:grid-cols-[1fr_minmax(360px,38%)]">
        {/* List */}
        <div
          data-project-list
          className="flex flex-col justify-center bg-[#f4f2ee] px-4 py-6 sm:px-8 md:px-12 2xl:px-16 2xl:py-10"
        >
          {showcase.map((project) => {
            const isActive = project.id === active;
            return (
              <Link
                key={project.id}
                href="/projects"
                data-project-row
                data-cursor-label="View"
                onMouseEnter={() => onHover(project.id)}
                onFocus={() => onHover(project.id)}
                className={`group flex items-center justify-between gap-4 rounded-lg px-4 py-4 transition-colors duration-300 sm:py-5 md:px-6 2xl:py-7 ${
                  isActive ? "bg-black" : "bg-transparent"
                }`}
              >
                <div className="flex min-w-0 flex-col">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={`font-display text-[clamp(1.5rem,1.2rem+1.6vw,3.5rem)] uppercase leading-none ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    >
                      {project.name}
                    </span>
                    <span
                      className={`font-display text-[clamp(1.1rem,0.9rem+1.2vw,2.5rem)] uppercase leading-none ${
                        isActive ? "text-white/50" : "text-neutral-400"
                      }`}
                    >
                      ({project.type})
                    </span>
                  </div>
                  <span
                    className={`body-sm mt-1 ${
                      isActive ? "text-white/60" : "text-neutral-500"
                    }`}
                  >
                    {project.location}
                  </span>
                </div>
                <span
                  className={`shrink-0 font-display text-[clamp(1.5rem,1.1rem+2vw,4rem)] leading-none ${
                    isActive ? "text-white" : "text-neutral-300"
                  }`}
                >
                  {project.area}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Preview image (desktop) */}
        <div className="relative hidden min-h-full overflow-hidden lg:block">
          <div data-project-preview className="absolute inset-0">
            <SmartImage
              key={activeProject?.id}
              src={activeProject?.image ?? ""}
              alt={activeProject?.name ?? ""}
              className="h-full w-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 2xl:bottom-10 2xl:left-10">
            <p className="display-sm text-white">{activeProject?.name}</p>
            <p className="body-sm max-w-xs text-white/70 2xl:max-w-sm">
              {activeProject?.description}
            </p>
          </div>
        </div>

        {/* Mobile preview strip */}
        <div className="relative h-56 overflow-hidden sm:h-72 lg:hidden">
          <SmartImage
            key={`m-${activeProject?.id}`}
            src={activeProject?.image ?? ""}
            alt={activeProject?.name ?? ""}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <p className="display-sm text-white">{activeProject?.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
