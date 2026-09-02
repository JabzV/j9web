"use client";

import { Quote } from "lucide-react";
import type { Review } from "@/data/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-sm bg-[#f4f2ee] p-6 text-black transition-transform duration-500 hover:-translate-y-1 2xl:gap-7 2xl:p-9">
      <div className="flex items-start justify-between gap-3">
        <h3 className="body-sm font-bold uppercase leading-snug text-black">
          {review.headline}
        </h3>
        <Quote className="h-5 w-5 shrink-0 text-accent/60 2xl:h-7 2xl:w-7" />
      </div>

      <p className="body-sm text-neutral-700">&ldquo;{review.quote}&rdquo;</p>

      <p className="label mt-auto border-t border-black/10 pt-5 text-right text-neutral-500">
        {review.author}
        {review.authorRole ? `, ${review.authorRole}` : ""}
      </p>
    </article>
  );
}
