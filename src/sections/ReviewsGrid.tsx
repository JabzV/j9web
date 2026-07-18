"use client";

import { useRef } from "react";
import ReviewCard from "@/components/ReviewCard";
import { gsap, useGSAP } from "@/lib/gsap";
import { reviews } from "@/data";

export default function ReviewsGrid() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-review-card]", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="shell bg-background py-[clamp(3rem,2rem+3vw,6rem)]">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
        {reviews.reviews.map((review) => (
          <div key={review.id} data-review-card>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  );
}
