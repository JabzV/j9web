"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Images arrive after hydration and change the page height as they land, which
 * invalidates every ScrollTrigger start/end that was measured before them.
 * Sections below the fold can otherwise stay stuck in their `from` state
 * (invisible) because their trigger point moved out from under them.
 * All loads collapse into one debounced refresh instead of one per image.
 *
 * The refresh is held until scrolling stops. `ScrollTrigger.refresh()` jumps
 * the page to 0 to take measurements and then restores the scroll position,
 * and doing that mid-flight aborts a native smooth scroll: an anchor jump to
 * #contact would die wherever it happened to be when a lazy image below the
 * fold finished loading. Deferring costs nothing — a stale trigger only
 * matters once the reader settles somewhere.
 */
const SCROLL_IDLE_MS = 250;
let refreshTimer: ReturnType<typeof setTimeout> | undefined;
let lastScrollAt = 0;

if (typeof window !== "undefined") {
  window.addEventListener(
    "scroll",
    () => {
      lastScrollAt = performance.now();
    },
    { passive: true },
  );
}

function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    if (performance.now() - lastScrollAt < SCROLL_IDLE_MS) {
      refreshScrollTriggers();
      return;
    }
    // refresh() restores the scroll position itself, but it lands a couple
    // hundred pixels off when images load during its measuring pass. Put the
    // reader back exactly where they were.
    const y = window.scrollY;
    ScrollTrigger.refresh();
    if (window.scrollY !== y) window.scrollTo({ top: y, behavior: "instant" });
  }, 150);
}

/**
 * Renders an image from `src`. If the file does not exist yet (e.g. a
 * placeholder path from the data layer), it gracefully falls back to a
 * labeled placeholder showing the expected path — drop the real file at
 * that path and it will appear automatically.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** How the image fills its box. Use "contain" for logos/artwork. */
  fit?: "cover" | "contain";
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Catch images that already errored before hydration (SSR + eager load),
  // where React's onError never fires.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || !img.complete) return;
    if (img.naturalWidth === 0) setFailed(true);
    else refreshScrollTriggers();
  }, []);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-neutral-800 text-center ${className}`}
        aria-label={alt}
      >
        <ImageIcon className="h-8 w-8 text-white/25" strokeWidth={1.2} />
        <span className="max-w-[85%] break-all px-2 text-[10px] leading-tight text-white/30">
          {src}
        </span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={refreshScrollTriggers}
        onError={() => {
          setFailed(true);
          refreshScrollTriggers();
        }}
        className={`h-full w-full ${
          fit === "contain" ? "object-contain" : "object-cover"
        } ${imgClassName}`}
      />
    </div>
  );
}
