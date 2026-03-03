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
  const isFlagship = project.level === "flagship";
  const isMedium = project.level === "medium";

  // Adaptive spacing
  const titleTopPadding = isFlagship ? "pt-28" : "pt-20";
  const titleBottomPadding = isFlagship ? "pb-16" : "pb-12";

  const sectionSpacing = isFlagship
    ? "py-28"
    : isMedium
    ? "py-24"
    : "py-16";

  const learningsSpacing = isFlagship ? "py-32" : "py-28";

  return (
    <div className="w-full">

      {/* Hero Gradient Section */}
      <ProjectHero hero={project.hero} />

      {/* Title + Tagline */}
      <section
        className={`max-w-5xl mx-auto px-6 ${titleTopPadding} ${titleBottomPadding}`}
      >
        {isFlagship && (
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Case Study
          </p>
        )}

        <h1
          className={`font-semibold tracking-tight text-neutral-900 ${
            isFlagship
              ? "text-5xl md:text-6xl"
              : "text-4xl md:text-5xl"
          }`}
        >
          {project.title}
        </h1>

        <p
          className={`mt-4 text-neutral-500 max-w-3xl ${
            isFlagship ? "text-xl" : "text-lg"
          }`}
        >
          {project.tagline}
        </p>
      </section>

      {/* Overview */}
      <section className={`max-w-5xl mx-auto px-6 ${sectionSpacing}`}>
        <ProjectOverview overview={project.overview} />
      </section>

      {/* Architecture */}
      {project.architecture && (
        <section className="bg-[#f8fafc]">
          <div className={`max-w-5xl mx-auto px-6 ${sectionSpacing}`}>
            <ProjectArchitecture architecture={project.architecture} />
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && (
        <section className={`max-w-5xl mx-auto px-6 ${sectionSpacing}`}>
          <ProjectFeatures features={project.features} />
        </section>
      )}

      {/* Scalability */}
      {project.scalability && (
        <section className="bg-[#f8fafc]">
          <div className={`max-w-5xl mx-auto px-6 ${sectionSpacing}`}>
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
        <section className={`max-w-5xl mx-auto px-6 ${sectionSpacing}`}>
          <ProjectChallenges challenges={project.challenges} />
        </section>
      )}

      {/* Trade-offs */}
      {project.tradeoffs && (
        <section className="bg-[#f8fafc]">
          <div className={`max-w-5xl mx-auto px-6 ${sectionSpacing}`}>
            <ProjectTradeoffs tradeoffs={project.tradeoffs} />
          </div>
        </section>
      )}

      {/* Learnings */}
      {project.learnings && (
        <section className={`max-w-5xl mx-auto px-6 ${learningsSpacing}`}>
          <ProjectLearnings learnings={project.learnings} />
        </section>
      )}
    </div>
  );
}