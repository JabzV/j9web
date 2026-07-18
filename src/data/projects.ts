import type { ProjectsContent } from "./types";

/**
 * Add, remove, or reorder projects here — the site updates automatically.
 * Set `featured: true` on the projects you want in the landing-page showcase.
 *
 * Each project has its own page at /projects/<id>.
 * `images` powers that page's gallery: the FIRST image is the cover used in
 * the showcase and grid, and you can add as many images as you want (12+).
 */
export const projects: ProjectsContent = {
  eyebrow: "Projects",
  heading: "Selected Works",
  featuredCount: 5,
  projects: [
    {
      id: "terra",
      name: "Terra",
      type: "House",
      location: "Los Angeles, USA",
      area: "320 M²",
      year: "2025",
      description:
        "A warm, earth-toned residence that blends into its desert surroundings.",
      images: [
        "/assets/images/projects/terra/01.jpg",
        "/assets/images/projects/terra/02.jpg",
        "/assets/images/projects/terra/03.jpg",
        "/assets/images/projects/terra/04.jpg",
        "/assets/images/projects/terra/05.jpg",
      ],
      featured: true,
    },
    {
      id: "echo",
      name: "Echo",
      type: "Residence",
      location: "Nice, France",
      area: "1,250 M²",
      year: "2025",
      description:
        "An expansive coastal residence framing panoramic Mediterranean views.",
      images: [
        "/assets/images/projects/echo/01.jpg",
        "/assets/images/projects/echo/02.jpg",
        "/assets/images/projects/echo/03.jpg",
        "/assets/images/projects/echo/04.jpg",
        "/assets/images/projects/echo/05.jpg",
      ],
      featured: true,
    },
    {
      id: "monolith",
      name: "Monolith",
      type: "House",
      location: "Costa del Sol, Spain",
      area: "170 M²",
      year: "2024",
      description:
        "A minimalist white monolith nestled dramatically between coastal rock.",
      images: [
        "/assets/images/projects/monolith/01.jpg",
        "/assets/images/projects/monolith/02.jpg",
        "/assets/images/projects/monolith/03.jpg",
        "/assets/images/projects/monolith/04.jpg",
        "/assets/images/projects/monolith/05.jpg",
      ],
      featured: true,
    },
    {
      id: "quartz",
      name: "Quartz",
      type: "Villa",
      location: "Sunny Coast, Italy",
      area: "280 M²",
      year: "2024",
      description:
        "A crystalline villa with clean geometry and abundant natural light.",
      images: [
        "/assets/images/projects/quartz/01.jpg",
        "/assets/images/projects/quartz/02.jpg",
        "/assets/images/projects/quartz/03.jpg",
        "/assets/images/projects/quartz/04.jpg",
        "/assets/images/projects/quartz/05.jpg",
      ],
      featured: true,
    },
    {
      id: "twin-stone",
      name: "Twin Stone",
      type: "Duplex",
      location: "Golden Shore, Greece",
      area: "400 M²",
      year: "2023",
      description:
        "A striking duplex carved into a golden cliffside overlooking the sea.",
      images: [
        "/assets/images/projects/twin-stone/01.jpg",
        "/assets/images/projects/twin-stone/02.jpg",
        "/assets/images/projects/twin-stone/03.jpg",
        "/assets/images/projects/twin-stone/04.jpg",
        "/assets/images/projects/twin-stone/05.jpg",
      ],
      featured: true,
    },
  ],
};
