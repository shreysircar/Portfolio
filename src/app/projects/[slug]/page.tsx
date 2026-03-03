import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectTemplate from "@/components/project/ProjectTemplate";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return <ProjectTemplate project={project} />;
}