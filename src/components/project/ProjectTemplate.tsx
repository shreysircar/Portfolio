// src/components/project/ProjectTemplate.tsx

import { Project } from "@/data/projects";

import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectArchitecture from "./ProjectArchitecture";
import ProjectFeatures from "./ProjectFeatures";
import ProjectChallenges from "./ProjectChallenges";
import ProjectTradeoffs from "./ProjectTradeoffs";
import ProjectLearnings from "./ProjectLearnings";

type Props = {
  project: Project;
};

export default function ProjectTemplate({ project }: Props) {
  return (
    <div className="w-full">

      {/* Hero Gradient Section */}
      <ProjectHero hero={project.hero} />

      {/* Title + Tagline (outside gradient) */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-neutral-500 max-w-3xl">
          {project.tagline}
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <ProjectOverview overview={project.overview} />
      </section>

      {/* Architecture (subtle alt background) */}
      {project.architecture && (
        <section className="bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <ProjectArchitecture architecture={project.architecture} />
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && (
        <section className="max-w-5xl mx-auto px-6 py-24">
          <ProjectFeatures features={project.features} />
        </section>
      )}

      {/* Scalability */}
      {project.scalability && (
        <section className="bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <ProjectFeatures
              title="Scalability & Performance"
              features={project.scalability.map((item) => ({
                title: item,
                description: "",
              }))}
            />
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && (
        <section className="max-w-5xl mx-auto px-6 py-24">
          <ProjectChallenges challenges={project.challenges} />
        </section>
      )}

      {/* Trade-offs */}
      {project.tradeoffs && (
        <section className="bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <ProjectTradeoffs tradeoffs={project.tradeoffs} />
          </div>
        </section>
      )}

      {/* Learnings */}
      {project.learnings && (
        <section className="max-w-5xl mx-auto px-6 py-28">
          <ProjectLearnings learnings={project.learnings} />
        </section>
      )}

    </div>
  );
}