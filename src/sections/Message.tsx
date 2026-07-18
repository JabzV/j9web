"use client";

import { useRef } from "react";
import SmartImage from "@/components/Media/SmartImage";
import { gsap, useGSAP, SplitText, prefersReducedMotion } from "@/lib/gsap";
import { message } from "@/data";

export default function Message() {
  const root = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();

      if (!reduced) {
        gsap.to("[data-message-bg]", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (quoteRef.current) {
        const split = new SplitText(quoteRef.current, { type: "words" });
        gsap.from(split.words, {
          opacity: reduced ? 1 : 0.12,
          duration: 0.6,
          stagger: 0.025,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });
      }

      gsap.from("[data-message-author]", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 55%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[60svh] items-center overflow-hidden bg-background py-[var(--space-section)]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div data-message-bg className="absolute inset-0 h-[120%] will-change-transform">
          <SmartImage
            src={message.backgroundImage}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="shell w-full">
        <div className="h-px w-full bg-white/15" />

        <blockquote
          ref={quoteRef}
          className="display-md mx-auto w-full py-[clamp(3rem,2rem+4vw,7rem)] text-center text-white"
        >
          &ldquo;{message.quote}&rdquo;
        </blockquote>

        <div
          data-message-author
          className="flex items-center justify-center gap-4 pb-[clamp(3rem,2rem+4vw,7rem)]"
        >
          <SmartImage
            src={message.authorAvatar}
            alt={message.authorName}
            className="h-[clamp(3.5rem,3rem+1.5vw,5.5rem)] w-[clamp(3.5rem,3rem+1.5vw,5.5rem)] shrink-0 rounded-full"
          />
          <div className="flex flex-col">
            <span className="body-base font-bold text-white">
              {message.authorName}
            </span>
            <span className="body-sm text-accent">{message.authorTitle}</span>
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />
      </div>
    </section>
  );
}
