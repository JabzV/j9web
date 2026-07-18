"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ReviewCard from "@/components/ReviewCard";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { reviews } from "@/data";

function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perView;
}

export default function Reviews() {
  const root = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const perView = usePerView();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, reviews.reviews.length - perView);
  const canPaginate = reviews.reviews.length > perView;

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;
      const offset = -(index * (100 / perView));
      gsap.to(track, {
        xPercent: offset,
        duration: prefersReducedMotion() ? 0 : 0.7,
        ease: "power3.out",
      });
    },
    { dependencies: [index, perView] },
  );

  useGSAP(
    () => {
      gsap.from("[data-review-item]", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: trackRef.current, start: "top 80%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="shell section-pad bg-background">
      <div>
        <SectionHeading eyebrow={reviews.eyebrow} title={reviews.heading} />

        <div className="mt-[clamp(2.5rem,2rem+2vw,5rem)] overflow-hidden">
          <div ref={trackRef} className="flex">
            {reviews.reviews.map((review) => (
              <div
                key={review.id}
                data-review-item
                className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {canPaginate && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={index === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
