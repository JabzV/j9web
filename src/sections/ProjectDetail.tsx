"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import SmartImage from "@/components/Media/SmartImage";
import PillLink from "@/components/Buttons/PillLink";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import type { Project } from "@/data/types";

/**
 * Dedicated page for a single project: cover hero, cream meta band (echoing
 * the landing showcase panel), gallery grid, and prev/next navigation.
 */
export default function ProjectDetail({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  const root = useRef<HTMLElement>(null);
  const [cover, ...gallery] = project.images;

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (!reduced) {
        tl.from("[data-detail-cover]", {
          scale: 1.08,
          duration: 1.6,
          ease: "power2.out",
        });
      }
      tl.from(
        "[data-detail-reveal]",
        { y: 40, opacity: 0, duration: 0.9, stagger: 0.12 },
        reduced ? 0 : 0.2,
      );

      gsap.from("[data-gallery-item]", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-gallery]", start: "top 82%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-background">
      {/* ── Cover hero ── */}
      <div className="relative h-[68svh] min-h-[480px] w-full overflow-hidden md:h-[78svh]">
        <div data-detail-cover className="absolute inset-0">
          <SmartImage
            src={cover}
            alt={project.name}
            className="h-full w-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-background" />

        <div className="shell absolute inset-x-0 bottom-[clamp(2rem,6svh,4.5rem)]">
          <p data-detail-reveal className="label mb-3 text-accent">
            {project.year ? `${project.year} — ` : ""}
            {project.type}
          </p>
          <h1 data-detail-reveal className="display-lg text-white">
            {project.name}
          </h1>
        </div>
      </div>

      {/* ── Cream meta band — same material as the showcase panel ── */}
      <div data-detail-reveal className="bg-[#f4f2ee]">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-8 py-[clamp(2rem,1.5rem+1.5vw,3.5rem)] md:grid-cols-4">
          {[
            { label: "Location", value: project.location },
            { label: "Type", value: project.type },
            { label: "Area", value: project.area },
            { label: "Year", value: project.year ?? "—" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <span className="label text-neutral-500">{item.label}</span>
              <span className="font-display text-[clamp(1.4rem,1.1rem+1.2vw,2.75rem)] uppercase leading-none text-black">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Description ── */}
      <div className="shell py-[clamp(3rem,2rem+3vw,6rem)]">
        <div className="max-w-3xl 2xl:max-w-4xl">
          <p data-detail-reveal className="label mb-4 text-accent">
            About the project
          </p>
          <p
            data-detail-reveal
            className="body-lg text-white/80"
          >
            {project.description}
          </p>
          <p
            data-detail-reveal
            className="body-sm mt-4 flex items-center gap-1.5 text-white/45"
          >
            <MapPin className="h-4 w-4" />
            {project.location}
          </p>
        </div>
      </div>

      {/* ── Gallery — first-of-pair spans full width every 5 items ── */}
      {gallery.length > 0 && (
        <div data-gallery className="shell grid gap-4 pb-[clamp(3rem,2rem+3vw,6rem)] sm:grid-cols-2 2xl:gap-6">
          {gallery.map((src, i) => (
            <div
              key={src}
              data-gallery-item
              className={`group overflow-hidden rounded-xl border border-white/10 ${
                i % 5 === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                  i % 5 === 0
                    ? "aspect-[16/8] max-h-[75svh]"
                    : "aspect-[4/3]"
                }`}
              >
                <SmartImage
                  src={src}
                  alt={`${project.name} — photo ${i + 2}`}
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Prev / next navigation ── */}
      <div className="border-t border-white/10">
        <div className="shell grid sm:grid-cols-2">
          <Link
            href={`/projects/${prev.id}`}
            data-cursor="hover"
            className="group flex items-center gap-4 border-b border-white/10 py-[clamp(1.75rem,1.25rem+1.5vw,3rem)] pr-6 sm:border-b-0 sm:border-r"
          >
            <ArrowLeft className="h-6 w-6 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-accent" />
            <span className="flex flex-col gap-1">
              <span className="label text-white/35">Previous project</span>
              <span className="display-sm text-white/75 transition-colors duration-300 group-hover:text-white">
                {prev.name}
              </span>
            </span>
          </Link>

          <Link
            href={`/projects/${next.id}`}
            data-cursor="hover"
            className="group flex items-center justify-end gap-4 py-[clamp(1.75rem,1.25rem+1.5vw,3rem)] text-right sm:pl-6"
          >
            <span className="flex flex-col gap-1">
              <span className="label text-white/35">Next project</span>
              <span className="display-sm text-white/75 transition-colors duration-300 group-hover:text-white">
                {next.name}
              </span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </div>
      </div>

      {/* ── Back to all + CTA ── */}
      <div className="shell flex flex-wrap items-center justify-between gap-5 py-[clamp(2.5rem,2rem+2vw,4.5rem)]">
        <Link
          href="/projects"
          data-cursor="hover"
          className="group flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white 2xl:text-base"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          All projects
        </Link>
        <PillLink href="/#contact" label="Start your project" />
      </div>
    </section>
  );
}
