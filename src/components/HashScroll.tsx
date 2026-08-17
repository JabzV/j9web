"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Makes an in-page anchor work when the URL already points at it.
 *
 * Clicking "Let's talk" scrolls to #contact and leaves `#contact` in the URL.
 * Scroll away and click it again and nothing happens: the hash is unchanged,
 * so the browser fires no navigation and Next's Link has nothing to push.
 *
 * A single delegated listener covers every anchor on the site — nav, footer,
 * hero, section CTAs — so individual links need no special handling. It only
 * steps in for the broken case (same path, same hash); anything else is left
 * to the browser and the router.
 *
 * It listens in the CAPTURE phase because these are next/link anchors: the
 * App Router hydrates the whole document, so React's delegated handler also
 * sits on `document` and would run first on the way up — calling
 * preventDefault itself, which would make a bubble-phase listener here bail.
 */
export default function HashScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Ignore anything already handled, and modified / non-primary clicks
      // that mean "open elsewhere".
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      const sameDocument =
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname;
      // Only the no-op case: a hash we are already sitting on.
      if (!sameDocument || !url.hash || url.hash !== window.location.hash) {
        return;
      }

      // getElementById, not querySelector: an id that is not a valid CSS
      // selector would throw and take every click on the page down with it.
      const section = document.getElementById(
        decodeURIComponent(url.hash.slice(1)),
      );
      if (!section) return;

      // Suppress the default jump only. The event is deliberately left to
      // propagate: the mobile menu's links close the overlay from their own
      // onClick, and next/link's same-URL push is a harmless no-op.
      e.preventDefault();
      // Honours each section's `scroll-mt-*`, and skips the animation when the
      // visitor has asked for reduced motion.
      section.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
