import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type IconType = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
  key: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface SiteConfig {
  name: string;
  logo: string;
  nav: NavItem[];
  contactCta: {
    label: string;
    href: string;
  };
  footer: {
    tagline: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    copyright: string;
  };
  socials: SocialLink[];
}

export interface HeroStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface HeroContent {
  headlineLines: string[];
  tagline: {
    lead: string;
    emphasis: string;
    trailing: string;
  };
  panelTitle: string;
  panelDescription: string;
  stat: HeroStat;
  videoSrc: string;
  posterSrc: string;
  panelImage: string;
}

export interface MessageContent {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  backgroundImage: string;
}

export interface Differentiator {
  id: string;
  title: string;
  body: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraph: string;
  image: string;
  differentiators: Differentiator[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  columns: {
    image: string;
    services: Service[];
  }[];
}

export interface Review {
  id: string;
  headline: string;
  quote: string;
  author: string;
  authorRole: string;
  avatar: string;
  projectName: string;
  projectLocation: string;
  projectImage: string;
}

export interface ReviewsContent {
  eyebrow: string;
  heading: string;
  reviews: Review[];
}

export interface Project {
  id: string;
  name: string;
  type: string;
  location: string;
  area: string;
  year?: string;
  description: string;
  image: string;
  /** Featured projects appear in the landing-page showcase. */
  featured?: boolean;
}

export interface ProjectsContent {
  eyebrow: string;
  heading: string;
  /** How many rows the landing showcase displays (featured first). */
  featuredCount: number;
  projects: Project[];
}

export interface ContactField {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

export interface ContactContent {
  eyebrow: string;
  headingLines: string[];
  intro: string;
  details: ContactDetail[];
  fields: ContactField[];
  submitLabel: string;
  backgroundImage: string;
}
