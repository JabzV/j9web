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

export interface CallToAction {
  label: string;
  href: string;
}

export interface HeroContent {
  headlineLines: string[];
  tagline: {
    lead: string;
    emphasis: string;
    trailing: string;
  };
  /** The button pair under the hero tagline. */
  ctas: {
    primary: CallToAction;
    secondary: CallToAction;
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
  paragraphs: string[];
  image: string;
  differentiators: Differentiator[];
}

export interface Principle {
  id: string;
  label: string;
  body: string;
}

/** Mission & Vision — rendered on the About page only. */
export interface MissionVisionContent {
  eyebrow: string;
  heading: string;
  principles: Principle[];
}

export interface ProcessStep {
  id: string;
  title: string;
  body: string;
}

/** Our Process — rendered on the About page only. */
export interface ProcessContent {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: ProcessStep[];
}

export interface Highlight {
  id: string;
  label: string;
  value: string;
}

/** Company highlights — rendered on the About page only. */
export interface HighlightsContent {
  eyebrow: string;
  heading: string;
  highlights: Highlight[];
}

export interface Stat {
  id: string;
  /** Rendered as-is when `countTo` is absent (e.g. "24/7"). */
  value: string;
  label: string;
  icon: LucideIcon;
  /** Numeric target for the scroll count-up; omit for non-numeric values. */
  countTo?: number;
  /** Appended while counting, e.g. "+" or "%". */
  suffix?: string;
}

/** The four-stat band sitting between the hero video and the info panel. */
export type StatsContent = Stat[];

export interface Client {
  id: string;
  /** Company name — used for the logo's alt text and the visible caption. */
  name: string;
  /** Logo file. Missing files render as a labeled placeholder. */
  logo: string;
}

export interface ClientsContent {
  eyebrow: string;
  heading: string;
  intro: string;
  clients: Client[];
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
  services: Service[];
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
  /**
   * Gallery images for the project's dedicated page. The first image is the
   * cover shown in showcases/grids. Any number of images is supported.
   */
  images: string[];
  /** Featured projects appear in the landing-page showcase. */
  featured?: boolean;
}

export interface ProjectsContent {
  eyebrow: string;
  heading: string;
  /** Heading for the landing-page featured carousel. */
  featured: {
    eyebrow: string;
    heading: string;
  };
  /** How many rows the landing showcase displays (featured first). */
  featuredCount: number;
  projects: Project[];
}

export interface LocationFact {
  id: string;
  label: string;
  value: string;
}

export interface LocationContent {
  eyebrow: string;
  heading: string;
  intro: string;
  address: string;
  facts: LocationFact[];
  mapImage: string;
  mapAlt: string;
  directionsUrl: string;
  directionsLabel: string;
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
