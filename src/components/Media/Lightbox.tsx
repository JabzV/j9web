"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SmartImage from "@/components/Media/SmartImage";

/**
 * Full-screen image viewer for project galleries.
 *
 * Controlled by the parent: `index` is the photo being shown, or `null` when
 * closed. Navigation wraps around. Rendered through a portal on <body> so no
 * transformed ancestor (the GSAP reveals on the gallery items) can trap the
 * fixed positioning, and so it layers cleanly above the z-50 navbar.
 */
export default function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
  label = "Image",
}: {
  images: string[];
  /** Index of the open image, or null when the viewer is closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  /** Used to build each image's alt text, e.g. "Gango Interior — photo 2 of 5". */
  label?: string;
}) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  // Drives the fade-in — set one frame after the dialog is in the DOM.
  const [shown, setShown] = useState(false);

  const go = useCallback(
    (step: number) => {
      if (index === null) return;
      onIndexChange((index + step + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  // Lock page scroll while open, matching the mobile-menu behaviour.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Move focus into the dialog on open and hand it back on close.
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const frame = requestAnimationFrame(() => setShown(true));
    return () => {
      cancelAnimationFrame(frame);
      setShown(false);
      previous?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        go(1);
      } else if (e.key === "ArrowLeft") {
        go(-1);
      } else if (e.key === "Tab") {
        // Keep focus inside the dialog while it owns the screen.
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled])",
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, go, onClose]);

  // The viewer only ever opens from a click, so it is closed on the server —
  // the document check just keeps createPortal safe if that ever changes.
  if (index === null || typeof document === "undefined") return null;

  const multiple = images.length > 1;
  const control =
    "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent";

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} — photo ${index + 1} of ${images.length}`}
      className={`fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      // Clicking the backdrop closes; the image and controls stop the bubble.
      onClick={onClose}
    >
      <div className="flex shrink-0 items-center justify-between px-[var(--space-gutter)] py-5">
        <span className="label text-white/50">
          {multiple ? `${index + 1} / ${images.length}` : ""}
        </span>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close image viewer"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className={control}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center gap-3 px-3 pb-6 sm:gap-5 sm:px-6">
        {multiple && (
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className={`${control} shrink-0`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          className="flex h-full min-w-0 flex-1 items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <SmartImage
            key={images[index]}
            src={images[index]}
            alt={`${label} — photo ${index + 1} of ${images.length}`}
            fit="contain"
            priority
            className="h-full w-full"
          />
        </div>

        {multiple && (
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className={`${control} shrink-0`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>,
    document.body,
  );
}
