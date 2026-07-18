"use client";

import { useRef } from "react";
import { useGSAP, scrollFadeUp, scrollLineReveal } from "@/lib/gsap";

/**
 * The repeated "EYEBROW / BIG TITLE / rule line" pattern used across sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  line = true,
  className = "",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  line?: boolean;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      scrollFadeUp("[data-heading-item]", {
        trigger: root.current,
        stagger: 0.1,
        y: 24,
      });
      if (lineRef.current) scrollLineReveal(lineRef.current, root.current);
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className={`flex flex-col gap-2.5 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      <p data-heading-item className="label text-accent">
        {eyebrow}
      </p>
      <h2 data-heading-item className="display-md text-white/90">
        {title}
      </h2>
      {line && (
        <div
          ref={lineRef}
          data-heading-item
          className="mt-2 h-px w-full bg-white/20"
        />
      )}
    </div>
  );
}
