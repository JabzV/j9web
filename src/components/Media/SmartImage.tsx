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
 */
let refreshTimer: ReturnType<typeof setTimeout> | undefined;
function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 120);
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
