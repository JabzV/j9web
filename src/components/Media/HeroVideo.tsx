"use client";

import { useState } from "react";
import SmartImage from "./SmartImage";

/**
 * Autoplaying muted background video with a poster fallback. If the video
 * fails to load, it falls back to the poster image (via SmartImage).
 */
export default function HeroVideo({
  videoSrc,
  posterSrc,
  className = "",
}: {
  videoSrc: string;
  posterSrc: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <SmartImage src={posterSrc} alt="" className={className} priority />;
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={posterSrc}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
