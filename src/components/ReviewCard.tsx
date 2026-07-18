"use client";

import SmartImage from "@/components/Media/SmartImage";
import { MapPin, Quote } from "lucide-react";
import type { Review } from "@/data/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-[#f4f2ee] text-black transition-transform duration-500 hover:-translate-y-1">
      <div className="flex flex-col gap-5 p-6 2xl:gap-7 2xl:p-9">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <SmartImage
              src={review.avatar}
              alt={review.author}
              className="h-11 w-11 shrink-0 rounded-full 2xl:h-14 2xl:w-14"
            />
            <h3 className="body-sm font-bold uppercase leading-snug text-black">
              {review.headline}
            </h3>
          </div>
          <Quote className="h-5 w-5 shrink-0 text-accent/60 2xl:h-7 2xl:w-7" />
        </div>
        <p className="body-sm text-neutral-700">&ldquo;{review.quote}&rdquo;</p>
        <p className="label text-right text-neutral-500">
          {review.author}
          {review.authorRole ? `, ${review.authorRole}` : ""}
        </p>
      </div>

      <div className="mt-auto p-4 pt-0 2xl:p-6 2xl:pt-0">
        <div className="relative h-28 overflow-hidden rounded-sm 2xl:h-40">
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
            <SmartImage
              src={review.projectImage}
              alt={review.projectName}
              className="h-full w-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <p className="font-display text-lg uppercase leading-none text-white 2xl:text-2xl">
              {review.projectName}
            </p>
            <p className="label mt-1 flex items-center gap-1 text-[10px] text-white/70">
              <MapPin className="h-3 w-3" />
              {review.projectLocation}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
