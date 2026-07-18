"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Custom cursor: a small dot that tracks the pointer exactly plus a larger
 * ring that trails with easing. Elements can opt into hover states via
 * `data-cursor="hover"` (grows) or `data-cursor-label="Text"` (shows a label).
 * Disabled on touch / reduced-motion devices (native cursor stays).
 */
export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!fine || !root || !dot || !ring || !label) return;

    // Center the elements on the pointer coordinates for every future tween
    gsap.set([dot, ring, label], { xPercent: -50, yPercent: -50 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });
    const xLabel = gsap.quickTo(label, "x", { duration: 0.35, ease: "power3" });
    const yLabel = gsap.quickTo(label, "y", { duration: 0.35, ease: "power3" });

    let revealed = false;

    const onMove = (e: PointerEvent) => {
      // Hide the native cursor and reveal the custom one only once we have
      // a real pointer position, so there's never a cursorless gap.
      if (!revealed) {
        revealed = true;
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
        root.style.opacity = "1";
        document.body.classList.add("has-custom-cursor");
      }

      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
      xLabel(e.clientX);
      yLabel(e.clientY);

      const target = (e.target as HTMLElement)?.closest(
        "[data-cursor], [data-cursor-label], a, button, input, textarea"
      ) as HTMLElement | null;

      const labelText = target?.dataset.cursorLabel;
      const isInteractive =
        target?.dataset.cursor === "hover" ||
        !!labelText ||
        target?.tagName === "A" ||
        target?.tagName === "BUTTON";

      gsap.to(ring, {
        scale: labelText ? 2.6 : isInteractive ? 1.6 : 1,
        borderColor: isInteractive ? "#dd0201" : "rgba(255,255,255,0.6)",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(label, {
        autoAlpha: labelText ? 1 : 0,
        duration: 0.2,
      });
      if (labelText) label.textContent = labelText;
    };

    const onDown = () => gsap.to(ring, { scale: 0.8, duration: 0.15 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.15 });

    // Restore the native cursor if the pointer leaves the window
    const onLeave = () => {
      root.style.opacity = "0";
    };
    const onEnter = () => {
      if (revealed) root.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      style={{ opacity: 0 }}
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200"
    >
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-9 w-9 rounded-full border border-white/60 mix-blend-difference"
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={labelRef}
        className="fixed left-0 top-0 text-[10px] font-semibold uppercase tracking-widest text-white opacity-0"
      />
    </div>
  );
}
