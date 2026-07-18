"use client";

import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import type { Differentiator } from "@/data/types";

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: Differentiator;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const body = bodyRef.current;
      if (!body) return;
      const reduced = prefersReducedMotion();
      gsap.to(body, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: reduced ? 0 : 0.5,
        ease: "power3.out",
      });
      gsap.to(iconRef.current, {
        rotate: isOpen ? 135 : 0,
        color: isOpen ? "#dd0201" : "#ffffff",
        duration: reduced ? 0 : 0.4,
        ease: "power2.out",
      });
    },
    { dependencies: [isOpen] }
  );

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="display-sm text-white/90 transition-colors group-hover:text-white">
          {item.title}
        </span>
        <Plus
          ref={iconRef}
          className="h-6 w-6 shrink-0 text-accent 2xl:h-8 2xl:w-8"
          strokeWidth={1.5}
        />
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden opacity-0">
        <p className="body-sm pb-6 pr-10 text-white/60">{item.body}</p>
      </div>
    </div>
  );
}

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: Differentiator[];
  defaultOpen?: number;
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpen >= 0 ? items[defaultOpen]?.id ?? null : null
  );

  return (
    <div className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
