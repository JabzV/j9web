"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroVideo from "@/components/Media/HeroVideo";
import SmartImage from "@/components/Media/SmartImage";
import { gsap, useGSAP, prefersReducedMotion, scrollCountUp } from "@/lib/gsap";
import { hero } from "@/data";

const MARQUEE_WORDS = ["Quality", "Integrity", "Excellence"];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLSpanElement>(null);
  const StatIcon = hero.stat.icon;

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (!reduced) {
        tl.from("[data-hero-video]", {
          scale: 1.12,
          duration: 1.8,
          ease: "power2.out",
        });
      }

      tl.from(
        "[data-hero-line]",
        {
          yPercent: 120,
          duration: 1.1,
          stagger: 0.14,
        },
        reduced ? 0 : 0.25
      ).from(
        "[data-hero-fade]",
        { y: 28, opacity: 0, duration: 0.9, stagger: 0.14 },
        "-=0.55"
      );

      if (statRef.current) {
        scrollCountUp(statRef.current, 23, { suffix: "+" });
      }
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-background">
      {/* ── Video hero zone: full-screen up to 1920px; on 2560px+ it takes
          ~2/3 of the viewport so the info band shares the first screen ── */}
      <div className="relative h-[100svh] min-h-[540px] w-full overflow-hidden min-[2560px]:h-[66svh] min-[2560px]:min-h-[460px]">
        <div data-hero-video className="absolute inset-0 will-change-transform">
          <HeroVideo
            videoSrc={hero.videoSrc}
            posterSrc={hero.posterSrc}
            className="h-full w-full"
          />
        </div>
        {/* gradient fade into black at the bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-background" />

        {/* Headline — top-left, under the navbar */}
        <div className="shell absolute inset-x-0 top-[clamp(5.5rem,10svh,10rem)] min-[1920px]:top-[12rem] shell-wide">
          <h1 className="display-xl text-white">
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.07em]">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Tagline — pinned to the bottom of the video zone */}
        <div className="shell absolute inset-x-0 bottom-[clamp(1.5rem,4svh,3rem)] shell-wide">
          <p
            data-hero-fade
            className="body-sm max-w-[24rem] text-white/65 xl:max-w-[30rem]"
          >
            {hero.tagline.lead}
            <strong className="font-semibold text-white/95">
              {hero.tagline.emphasis}
            </strong>
            <br />
            {hero.tagline.trailing}
          </p>
        </div>
      </div>

      {/* ── Info band — flows directly from the video, one composition ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(300px,36%)_1fr_auto]">
        {/* White blueprint panel, flush left */}
        <div className="flex items-center justify-center bg-[#f4f2ee] px-0 py-6 md:py-7 2xl:py-10">
          <SmartImage
            src={hero.panelImage}
            alt="Architectural blueprint"
            className="h-[220px] w-full md:h-[250px] 2xl:h-[320px]"
          />
        </div>

        {/* Center text */}
        <div
          data-hero-fade
          className="flex flex-col justify-center gap-4 px-[var(--space-gutter)] py-10 md:py-8 2xl:gap-6"
        >
          <h2 className="max-w-[16ch] text-[clamp(1.6rem,1.1rem+1.8vw,3.25rem)] font-medium leading-tight text-white">
            {hero.panelTitle}
          </h2>
          <p className="body-sm max-w-md text-white/75 2xl:max-w-lg">
            {hero.panelDescription}
          </p>
        </div>

        {/* Stats + view projects */}
        <div className="flex flex-row items-center justify-between gap-10 border-t border-white/10 px-[var(--space-gutter)] py-8 md:col-span-2 md:border-t-0 lg:col-span-1 lg:flex-col lg:items-end lg:justify-center lg:gap-7 lg:py-6 lg:pr-[var(--space-gutter)]">
          <div className="flex flex-col lg:items-end">
            <div className="flex items-center gap-2 text-white/55">
              <StatIcon className="h-5 w-5" strokeWidth={1.5} />
              <span className="body-sm">{hero.stat.label}</span>
            </div>
            <span
              ref={statRef}
              className="font-display text-[clamp(3.5rem,2.75rem+3vw,6.5rem)] leading-none text-white/85"
            >
              23+
            </span>
          </div>

          <Link
            href="/projects"
            data-cursor-label="View"
            className="group flex flex-col items-center gap-2.5"
          >
            <span className="flex -space-x-4">
              <SmartImage
                src="/assets/images/hero-section/avatar-1.jpg"
                alt=""
                className="h-14 w-14 rounded-full border-2 border-background 2xl:h-16 2xl:w-16"
              />
              <SmartImage
                src="/assets/images/hero-section/avatar-2.jpg"
                alt=""
                className="h-14 w-14 rounded-full border-2 border-background 2xl:h-16 2xl:w-16"
              />
            </span>
            <span className="body-sm flex items-center gap-1 text-white/55 transition-colors group-hover:text-white">
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* ── Marquee brand strip — transition into the next section ── */}
      <div className="relative overflow-hidden border-y border-white/10 bg-background py-4 md:py-5">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap md:gap-14">
          {Array.from({ length: 2 }).map((_, half) => (
            <div
              key={half}
              aria-hidden={half === 1}
              className="flex items-center gap-8 md:gap-14"
            >
              {Array.from({ length: 4 }).flatMap((_, rep) =>
                MARQUEE_WORDS.map((word) => (
                  <span
                    key={`${rep}-${word}`}
                    className="flex items-center gap-8 md:gap-14"
                  >
                    <span className="font-display text-2xl uppercase tracking-wide text-white/85 md:text-4xl 2xl:text-5xl">
                      {word}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent md:h-2 md:w-2" />
                  </span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
