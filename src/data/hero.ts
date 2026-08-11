import { HousePlus } from "lucide-react";
import type { HeroContent } from "./types";

export const hero: HeroContent = {
  headlineLines: ["We Build", "Your Dreams"],
  tagline: {
    lead: "We build your dreams with ",
    emphasis: "QUALITY, INTEGRITY, EXCELLENCE",
    trailing: "Done by Licensed and Experienced Professionals",
  },
  ctas: {
    primary: { label: "Request Free Estimate", href: "/#contact" },
    secondary: { label: "View Our Projects", href: "/projects" },
  },
  panelTitle: "Let's Build Something Amazing Together",
  panelDescription:
    "J9 Design and Build offers building plans, construction, and supply services, your all-in-one partner.",
  stat: {
    value: "23+",
    label: "Projects Done",
    icon: HousePlus,
  },
  videoSrc: "/assets/images/hero-section/Loop.mp4",
  posterSrc: "/assets/images/hero-section/hero-poster.jpg",
  panelImage: "/assets/images/hero-section/blueprint.png",
};
