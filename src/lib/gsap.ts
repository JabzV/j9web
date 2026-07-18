"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Shared easing / timing tokens so animations feel consistent site-wide.
 */
export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
} as const;

export const DURATION = {
  fast: 0.4,
  base: 0.8,
  slow: 1.2,
} as const;

/**
 * Fade + slide up entrance driven by a ScrollTrigger.
 * Respects reduced motion by collapsing to a simple fade.
 */
export function scrollFadeUp(
  targets: gsap.TweenTarget,
  options: {
    trigger?: Element | null;
    start?: string;
    y?: number;
    stagger?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const reduced = prefersReducedMotion();
  const {
    trigger,
    start = "top 80%",
    y = reduced ? 0 : 40,
    stagger = 0.12,
    duration = DURATION.base,
    delay = 0,
  } = options;

  return gsap.from(targets, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease: EASE.out,
    scrollTrigger: trigger
      ? {
          trigger,
          start,
        }
      : undefined,
  });
}

/**
 * Grow a horizontal rule from 0 to full width on scroll.
 */
export function scrollLineReveal(
  target: gsap.TweenTarget,
  trigger?: Element | null
) {
  if (prefersReducedMotion()) return;
  return gsap.from(target, {
    scaleX: 0,
    transformOrigin: "left center",
    duration: DURATION.slow,
    ease: EASE.expo,
    scrollTrigger: trigger ? { trigger, start: "top 85%" } : undefined,
  });
}

/**
 * Count a numeric value up when it scrolls into view.
 */
export function scrollCountUp(
  el: HTMLElement,
  end: number,
  opts: { suffix?: string; prefix?: string; format?: boolean } = {}
) {
  const { suffix = "", prefix = "", format = false } = opts;
  if (prefersReducedMotion()) {
    el.textContent = `${prefix}${format ? end.toLocaleString() : end}${suffix}`;
    return;
  }
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: end,
    duration: DURATION.slow,
    ease: EASE.out,
    scrollTrigger: { trigger: el, start: "top 90%" },
    onUpdate: () => {
      const v = Math.round(obj.val);
      el.textContent = `${prefix}${format ? v.toLocaleString() : v}${suffix}`;
    },
  });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
