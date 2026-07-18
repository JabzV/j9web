"use client";

import { useMemo, useRef, useState } from "react";
import { MapPin, ArrowUpRight, Plus } from "lucide-react";
import SmartImage from "@/components/Media/SmartImage";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects } from "@/data";

const PAGE_SIZE = 9;

export default function ProjectsGrid() {
  const root = useRef<HTMLElement>(null);
  const types = useMemo(
    () => ["All", ...Array.from(new Set(projects.projects.map((p) => p.type)))],
    []
  );
  const [filter, setFilter] = useState("All");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filtered = projects.projects.filter(
    (p) => filter === "All" || p.type === filter
  );
  const visible = filtered.slice(0, limit);
  const hasMore = filtered.length > limit;

  const selectFilter = (type: string) => {
    setFilter(type);
    setLimit(PAGE_SIZE);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-grid-card]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: "power3.out" }
      );
    },
    { dependencies: [filter], scope: root }
  );

  return (
    <section ref={root} className="shell bg-background py-[clamp(3rem,2rem+3vw,6rem)]">
      {/* Filter bar + count */}
      <div className="mb-[clamp(2rem,1.5rem+1.5vw,4rem)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2.5 2xl:gap-3">
          {types.map((type) => {
            const count =
              type === "All"
                ? projects.projects.length
                : projects.projects.filter((p) => p.type === type).length;
            return (
              <button
                key={type}
                type="button"
                onClick={() => selectFilter(type)}
                data-cursor="hover"
                className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors 2xl:px-7 2xl:py-3 2xl:text-base ${
                  filter === type
                    ? "border-accent bg-accent text-white"
                    : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {type}
                <span
                  className={`text-xs 2xl:text-sm ${
                    filter === type ? "text-white/70" : "text-white/35"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p className="body-sm text-white/40">
          Showing {visible.length} of {filtered.length}
        </p>
      </div>

      {/* Grid — 1 / 2 / 3 columns, 4 on very large screens */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8 min-[2200px]:grid-cols-4">
        {visible.map((project) => (
          <article
            key={project.id}
            data-grid-card
            data-cursor-label="View"
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-accent/40"
          >
            <div className="relative h-64 overflow-hidden 2xl:h-80">
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                <SmartImage
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="label absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-white backdrop-blur-sm">
                {project.type}
              </span>
              {project.year && (
                <span className="label absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-white/70 backdrop-blur-sm">
                  {project.year}
                </span>
              )}
              <ArrowUpRight className="absolute bottom-4 right-4 h-6 w-6 -translate-x-2 translate-y-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="flex flex-col gap-2 p-6 2xl:p-8">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="display-sm text-white">{project.name}</h3>
                <span className="font-display text-xl leading-none text-accent 2xl:text-3xl">
                  {project.area}
                </span>
              </div>
              <p className="body-sm flex items-center gap-1 text-white/50">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </p>
              <p className="body-sm mt-1 text-white/60">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-[clamp(2.5rem,2rem+2vw,5rem)] flex justify-center">
          <button
            type="button"
            data-cursor="hover"
            onClick={() => setLimit((l) => l + PAGE_SIZE)}
            className="group flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white/80 transition-colors hover:border-accent hover:text-white 2xl:px-10 2xl:py-4 2xl:text-base"
          >
            <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            Load more projects
          </button>
        </div>
      )}
    </section>
  );
}
