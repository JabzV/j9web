"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";

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
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Catch images that already errored before hydration (SSR + eager load),
  // where React's onError never fires.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
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
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
