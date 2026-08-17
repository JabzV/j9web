import { Building2, HardHat, Headset, Smile } from "lucide-react";
import type {
  MissionVisionContent,
  ProcessContent,
  HighlightsContent,
  StatsContent,
} from "./types";
import { projects } from "./projects";

/** About-page content: mission & vision, process, and company highlights. */

/**
 * The landing-page stat band. `projects` is derived from the project list,
 * `experience` comes from the figures already recorded on this site; the last
 * two are unverified.
 */
export const stats: StatsContent = [
  {
    id: "projects",
    // Derived from the project list so it can never drift out of date.
    value: `${projects.projects.length}+`,
    label: "Projects Completed",
    icon: Building2,
    countTo: projects.projects.length,
    suffix: "+",
  },
  {
    id: "experience",
    value: "15+",
    label: "Years Experience",
    icon: HardHat,
    countTo: 15,
    suffix: "+",
  },
  // TODO: confirm with client — no satisfaction figure has been supplied.
  {
    id: "satisfaction",
    value: "100%",
    label: "Client Satisfaction",
    icon: Smile,
    countTo: 100,
    suffix: "%",
  },
  // TODO: confirm with client — does J9 actually offer 24/7 support?
  {
    id: "support",
    value: "24/7",
    label: "Support",
    icon: Headset,
  },
];

export const missionVision: MissionVisionContent = {
  eyebrow: "Mission & Vision",
  heading: "What Drives Us Forward",
  principles: [
    {
      id: "mission",
      label: "Our Mission",
      body: "To provide innovative, reliable, and high-quality construction and engineering solutions that exceed client expectations through professionalism, integrity, and excellence in every project we undertake.",
    },
    {
      id: "vision",
      label: "Our Vision",
      body: "To become one of Northern Mindanao's most trusted and respected construction companies by building structures that improve communities, inspire confidence, and create lasting value for generations.",
    },
  ],
};

export const processContent: ProcessContent = {
  eyebrow: "Our Process",
  heading: "From First Conversation to Turnover",
  intro:
    "A clear, four-step path that keeps every project on schedule, on budget, and built to standard.",
  steps: [
    {
      id: "consultation",
      title: "Consultation",
      body: "We begin by understanding your goals, requirements, and budget.",
    },
    {
      id: "planning-design",
      title: "Planning & Design",
      body: "Our team prepares professional plans, engineering solutions, and accurate project estimates.",
    },
    {
      id: "construction",
      title: "Construction",
      body: "We execute every project with quality workmanship, proper supervision, and strict safety standards.",
    },
    {
      id: "turnover",
      title: "Project Turnover",
      body: "We deliver projects that are built to last and meet the highest standards of quality.",
    },
  ],
};

export const highlights: HighlightsContent = {
  eyebrow: "Company Highlights",
  heading: "J9 at a Glance",
  highlights: [
    { id: "established", label: "Established", value: "2021" },
    {
      id: "experience",
      label: "Construction Experience",
      value: "Since 2009",
    },
    { id: "projects", label: "Projects Completed", value: "100+" },
    { id: "location", label: "Location", value: "Malaybalay City, Bukidnon" },
    {
      id: "service-area",
      label: "Service Area",
      value: "Bukidnon and nearby areas",
    },
  ],
};
