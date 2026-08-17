"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import PillLink from "@/components/Buttons/PillLink";
import SmartImage from "@/components/Media/SmartImage";
import SectionHeading from "@/components/SectionHeading";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { usePerView } from "@/lib/usePerView";
import { projects } from "@/data";

/**
 * Paged carousel of the featured projects, sitting directly under the hero
 * marquee. Same selection as the Selected Works showcase further down the
 * page — this is the quick visual pass, that one is the browsable index.
 */
export default function FeaturedProjects() {
  const root = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const perView = usePerView();
  const [index, setIndex] = useState(0);

  const featured = projects.projects.filter((p) => p.featured);
  const showcase =
    featured.length > 0
      ? featured
      : projects.projects.slice(0, projects.featuredCount);

  const maxIndex = Math.max(0, showcase.length - perView);
  const canPaginate = showcase.length > perView;

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;
      gsap.to(track, {
        xPercent: -(index * (100 / perView)),
        duration: prefersReducedMotion() ? 0 : 0.7,
        ease: "power3.out",
      });
    },
    { dependencies: [index, perView] },
  );

  useGSAP(
    () => {
      gsap.from("[data-featured-item]", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: trackRef.current, start: "top 85%" },
      });
    },
    { scope: root },
  );

  return (
    // Bottom padding only: the Message section above already ends with a full
    // `--space-section`, and `section-pad` here would stack a second one.
    <section
      ref={root}
      className="shell bg-background pb-[var(--space-section)]"
    >
      <SectionHeading
        eyebrow={projects.featured.eyebrow}
        title={projects.featured.heading}
      />

      <div className="mt-[clamp(2.5rem,2rem+2vw,5rem)] overflow-hidden">
        <div ref={trackRef} className="flex">
          {showcase.map((project) => (
            <div
              key={project.id}
              data-featured-item
              className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
            >
              <Link
                href={`/projects/${project.id}`}
                data-cursor-label="View"
                className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-accent/40"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <SmartImage
                      src={project.images[0]}
                      alt={project.name}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 2xl:p-7">
                    <h3 className="display-sm text-white">{project.name}</h3>
                    <p className="body-sm flex items-center gap-1.5 text-white/70">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {project.location}
                    </p>
                    {project.year && (
                      <p className="label text-accent">
                        Completed {project.year}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows centred, "view all" trailing — on mobile the pill drops below. */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        {canPaginate && (
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={index === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
        <PillLink
          href="/projects"
          label={`View all ${projects.projects.length} projects`}
          size="sm"
        />
      </div>
    </section>
  );
}
