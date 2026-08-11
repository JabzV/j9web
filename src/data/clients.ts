import type { ClientsContent } from "./types";

/**
 * Client roster. Logo files live in `public/assets/images/clients/`. The
 * supplied files are JPGs with baked-in backgrounds (white, black, gold,
 * green), so the section renders each one on a light tile to keep the wall
 * visually consistent. Add or remove entries freely — the grid reflows.
 */
export const clients: ClientsContent = {
  eyebrow: "Our Clients",
  heading: "Clients We've Worked With",
  intro:
    "From private homeowners to institutions and local government, we're trusted by partners across Northern Mindanao to deliver work that lasts.",
  clients: [
    { id: "luxrynph02", name: "LUXRYNPH02", logo: "/assets/images/clients/c1.jpg" },
    { id: "ictsi-foundation", name: "ICTSI Foundation", logo: "/assets/images/clients/c2.jpg" },
    {
      id: "mindanao-container-terminal",
      name: "Mindanao Container Terminal",
      logo: "/assets/images/clients/c3.jpg",
    },
    { id: "okobox", name: "OKOBOX", logo: "/assets/images/clients/c4.jpg" },
    { id: "zero-visibility", name: "Zero Visibility", logo: "/assets/images/clients/c5.jpg" },
    {
      id: "buseco",
      name: "BUSECO — Bukidnon II Electric Cooperative, Inc.",
      logo: "/assets/images/clients/c6.jpg",
    },
    {
      id: "sacred-heart-academy",
      name: "Sacred Heart Academy, Bugo",
      logo: "/assets/images/clients/c7.jpg",
    },
    { id: "feedpro", name: "FeedPro", logo: "/assets/images/clients/c8.jpg" },
    {
      id: "gingoog-city-colleges",
      name: "Gingoog City Colleges",
      logo: "/assets/images/clients/c9.jpg",
    },
    {
      id: "national-power-corporation",
      name: "National Power Corporation",
      logo: "/assets/images/clients/c10.jpg",
    },
  ],
};
