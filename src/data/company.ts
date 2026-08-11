import type {
  MissionVisionContent,
  ProcessContent,
  HighlightsContent,
} from "./types";

/** About-page content: mission & vision, process, and company highlights. */

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
