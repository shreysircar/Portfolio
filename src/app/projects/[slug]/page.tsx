import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectTemplate from "@/components/project/ProjectTemplate";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectTemplate project={project} />;
}