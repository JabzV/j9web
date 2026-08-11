"use client";

import { useEffect, useState } from "react";

/**
 * How many carousel slides are visible at once. Shared by the reviews and
 * featured-project carousels so both page by the same amount at the same
 * breakpoints.
 */
export function usePerView() {
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
