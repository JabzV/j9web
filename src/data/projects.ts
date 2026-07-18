import type { ProjectsContent } from "./types";

/**
 * Add, remove, or reorder projects here — the site updates automatically.
 * Set `featured: true` on the projects you want in the landing-page showcase
 * (up to `featuredCount` are shown there; the /projects page shows all).
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
      image: "/assets/images/projects/terra.jpg",
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
      image: "/assets/images/projects/echo.jpg",
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
      image: "/assets/images/projects/monolith.jpg",
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
      image: "/assets/images/projects/quartz.jpg",
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
      image: "/assets/images/projects/twin-stone.jpg",
      featured: true,
    },
  ],
};
