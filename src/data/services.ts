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

export const services: ServicesContent = {
  eyebrow: "Services",
  heading: "The Services We Offer",
  columns: [
    {
      image: "/assets/images/services/service-col-1.jpg",
      services: [
        {
          id: "architectural-design",
          title: "Architectural Design",
          description:
            "Bespoke architectural plans tailored to your vision, site, and lifestyle.",
          icon: DraftingCompass,
          image: "/assets/images/services/service-col-1.jpg",
        },
        {
          id: "structural-engineering",
          title: "Structural Engineering",
          description:
            "Sound, code-compliant engineering that keeps your build safe and lasting.",
          icon: Ruler,
          image: "/assets/images/services/service-col-1.jpg",
        },
        {
          id: "interior-design",
          title: "Interior Design",
          description:
            "Interiors that balance beauty and function, crafted down to the last detail.",
          icon: PencilRuler,
          image: "/assets/images/services/service-col-1.jpg",
        },
      ],
    },
    {
      image: "/assets/images/services/service-col-2.jpg",
      services: [
        {
          id: "general-construction",
          title: "General Construction",
          description:
            "End-to-end construction managed by licensed and experienced professionals.",
          icon: HardHat,
          image: "/assets/images/services/service-col-2.jpg",
        },
        {
          id: "renovation",
          title: "Renovation & Remodeling",
          description:
            "Transform existing spaces with thoughtful, high-quality renovations.",
          icon: Building2,
          image: "/assets/images/services/service-col-2.jpg",
        },
        {
          id: "project-management",
          title: "Project Management",
          description:
            "A single accountable partner keeping your project on time and on budget.",
          icon: Layers,
          image: "/assets/images/services/service-col-2.jpg",
        },
      ],
    },
    {
      image: "/assets/images/services/service-col-3.jpg",
      services: [
        {
          id: "building-plans",
          title: "Building Plans & Permits",
          description:
            "Complete building plans and permit processing handled for you.",
          icon: Home,
          image: "/assets/images/services/service-col-3.jpg",
        },
        {
          id: "material-supply",
          title: "Material Supply",
          description:
            "Reliable supply of quality construction materials at fair pricing.",
          icon: Truck,
          image: "/assets/images/services/service-col-3.jpg",
        },
        {
          id: "commercial-build",
          title: "Commercial Builds",
          description:
            "Scalable commercial construction from warehouses to office spaces.",
          icon: Warehouse,
          image: "/assets/images/services/service-col-3.jpg",
        },
      ],
    },
  ],
};
