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
 * `image` is the card's cover; the three files below are shared across the
 * nine services for now. Give a service its own path once you have a photo
 * for it: missing files fall back to a labeled placeholder.
 */
const COVER_A = "/assets/images/services/service-col-1.jpg";
const COVER_B = "/assets/images/services/service-col-2.jpg";
const COVER_C = "/assets/images/services/service-col-3.jpg";

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
      image: COVER_A,
    },
    {
      id: "structural-engineering",
      title: "Structural Engineering",
      description:
        "Sound, code-compliant engineering that keeps your build safe and lasting.",
      icon: Ruler,
      image: COVER_B,
    },
    {
      id: "interior-design",
      title: "Interior Design",
      description:
        "Interiors that balance beauty and function, crafted down to the last detail.",
      icon: PencilRuler,
      image: COVER_C,
    },
    {
      id: "general-construction",
      title: "General Construction",
      description:
        "End-to-end construction managed by licensed and experienced professionals.",
      icon: HardHat,
      image: COVER_A,
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with thoughtful, high-quality renovations.",
      icon: Building2,
      image: COVER_B,
    },
    {
      id: "project-management",
      title: "Project Management",
      description:
        "A single accountable partner keeping your project on time and on budget.",
      icon: Layers,
      image: COVER_C,
    },
    {
      id: "building-plans",
      title: "Building Plans & Permits",
      description:
        "Complete building plans and permit processing handled for you.",
      icon: Home,
      image: COVER_A,
    },
    {
      id: "material-supply",
      title: "Material Supply",
      description:
        "Reliable supply of quality construction materials at fair pricing.",
      icon: Truck,
      image: COVER_B,
    },
    {
      id: "commercial-build",
      title: "Commercial Builds",
      description:
        "Scalable commercial construction from warehouses to office spaces.",
      icon: Warehouse,
      image: COVER_C,
    },
  ],
};
