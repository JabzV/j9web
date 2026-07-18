import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/sections/ProjectDetail";
import { projects } from "@/data";

export function generateStaticParams() {
  return projects.projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.projects.find((p) => p.id === slug);
  if (!project) return { title: "Project | J9 Design and Build" };
  return {
    title: `${project.name} | J9 Design and Build`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const all = projects.projects;
  const index = all.findIndex((p) => p.id === slug);
  if (index === -1) notFound();

  const project = all[index];
  const prev = all[(index - 1 + all.length) % all.length];
  const next = all[(index + 1) % all.length];

  return <ProjectDetail project={project} prev={prev} next={next} />;
}
