import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/social";
import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "J9 Design and Build",
  logo: "/assets/j9_whitelogo.webp",
  nav: [
    { label: "Home", href: "/", key: "home" },
    { label: "About", href: "/about", key: "about" },
    { label: "Services", href: "/#services", key: "services" },
    { label: "Reviews", href: "/reviews", key: "reviews" },
    { label: "Projects", href: "/projects", key: "projects" },
  ],
  contactCta: {
    label: "Contact Us",
    href: "/#contact",
  },
  footer: {
    tagline:
      "We build your dreams with quality, integrity, and excellence. Your all-in-one partner for building plans, construction, and supply.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/#services" },
          { label: "Projects", href: "/projects" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Reviews", href: "/reviews" },
          { label: "Contact", href: "/#contact" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} J9 Design and Build. All rights reserved.`,
  },
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/J9Services",
      icon: FacebookIcon,
    },
    { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  ],
};
