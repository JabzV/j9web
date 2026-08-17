import {
  DraftingCompass,
  Building2,
  Ruler,
  HardHat,
  PencilRuler,
  Truck,
  Home,
  Warehouse,
  Layers,
} from "lucide-react";
import type { ServicesContent } from "./types";

/**
 * One flat list — the section renders a card per service.
 * `image` is the card's cover: each service has its own photo, named after its
 * id in /assets/images/services. Missing files fall back to a labeled
 * placeholder, so a new service renders fine before its photo arrives.
 */

export const services: ServicesContent = {
  eyebrow: "Services",
  heading: "The Services We Offer",
  services: [
    {
      id: "architectural-design",
      title: "Architectural Design",
      description:
        "Bespoke architectural plans tailored to your vision, site, and lifestyle.",
      icon: DraftingCompass,
      image: "/assets/images/services/architectural-design.webp",
    },
    {
      id: "structural-engineering",
      title: "Structural Engineering",
      description:
        "Sound, code-compliant engineering that keeps your build safe and lasting.",
      icon: Ruler,
      image: "/assets/images/services/structural-engineering.webp",
    },
    {
      id: "interior-design",
      title: "Interior Design",
      description:
        "Interiors that balance beauty and function, crafted down to the last detail.",
      icon: PencilRuler,
      image: "/assets/images/services/interior-design.webp",
    },
    {
      id: "general-construction",
      title: "General Construction",
      description:
        "End-to-end construction managed by licensed and experienced professionals.",
      icon: HardHat,
      image: "/assets/images/services/general-construction.webp",
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with thoughtful, high-quality renovations.",
      icon: Building2,
      image: "/assets/images/services/renovation.webp",
    },
    {
      id: "project-management",
      title: "Project Management",
      description:
        "A single accountable partner keeping your project on time and on budget.",
      icon: Layers,
      image: "/assets/images/services/project-management.webp",
    },
    {
      id: "building-plans",
      title: "Building Plans & Permits",
      description:
        "Complete building plans and permit processing handled for you.",
      icon: Home,
      image: "/assets/images/services/building-plans.webp",
    },
    {
      id: "material-supply",
      title: "Material Supply",
      description:
        "Reliable supply of quality construction materials at fair pricing.",
      icon: Truck,
      image: "/assets/images/services/material-supply.webp",
    },
    {
      id: "commercial-build",
      title: "Commercial Builds",
      description:
        "Scalable commercial construction from warehouses to office spaces.",
      icon: Warehouse,
      image: "/assets/images/services/commercial-build.webp",
    },
  ],
};
