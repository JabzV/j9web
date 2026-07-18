import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectsGrid from "@/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | J9 Design and Build",
  description:
    "Explore selected works by J9 Design and Build — homes, residences, villas, and more across the globe.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected Works"
        description="A look at some of the spaces we've designed and built. Filter by type to explore our range."
      />
      <ProjectsGrid />
    </>
  );
}
