import type { ReviewsContent } from "./types";

/**
 * Text-only testimonials — no avatars or project photos, since the reviews
 * aren't tied to a specific published project.
 */

export const reviews: ReviewsContent = {
  eyebrow: "Reviews",
  heading: "See What Our Clients Have to Say",
  reviews: [
    {
      id: "ryndel-maglipong",
      headline: "They treated my build like it was their own.",
      quote:
        "From the first plan to the final turnover, the team kept me in the loop and stuck to what we agreed on. As a business owner I appreciate people who respect a budget and a timeline — J9 did both without cutting corners.",
      author: "Ryndel Maglipong",
      authorRole: "Business Owner",
    },
    {
      id: "atty-beltran",
      headline: "Everything was documented, clear, and above board.",
      quote:
        "What impressed me most was the paperwork and the transparency. Permits, contracts, and change orders were all explained before anything moved. In my line of work that kind of diligence is rare, and it made the whole project stress-free.",
      author: "Atty. Beltran",
      authorRole: "Former Board Member",
    },
    {
      id: "christianly-agpalo",
      headline: "The design brought in more customers than I expected.",
      quote:
        "I came to them with a rough idea and a small lot. They turned it into a space that actually works for my business — good flow, good lighting, and finishes that still look new. Foot traffic picked up the moment we opened.",
      author: "Christianly Agpalo",
      authorRole: "Business Owner",
    },
    {
      id: "jade-flores",
      headline: "Disciplined crew, clean site, no excuses.",
      quote:
        "The workers were on site when they said they would be, and the area was swept at the end of every day. Updates came without me having to chase anyone. Our family home was finished the way it was drawn, and it feels solid.",
      author: "Jade Flores",
      authorRole: "Police Officer",
    },
    {
      id: "clyde-tauli",
      headline: "The costing held up to my own audit.",
      quote:
        "I went through every line of the estimate, and the billings matched the progress on the ground each time. No padded quantities, no surprise charges at the end. For an accountant, that is the highest compliment I can give a contractor.",
      author: "Clyde Tauli",
      authorRole: "CPA",
    },
    {
      id: "captain-dumdumaya",
      headline: "They delivered on schedule while I was out at sea.",
      quote:
        "I was away for most of the construction, so I had to trust them completely. They sent photos and updates on schedule, handled every decision the way we discussed, and I came home to a house that was already done. Nothing was left hanging.",
      author: "Captain Dumdumaya",
      authorRole: "Ship Captain",
    },
  ],
};
