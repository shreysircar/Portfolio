"use client";

import Link from "next/link";

export default function Intern1Page() {
  return (
    <main className="bg-[#F3F3F3] text-neutral-800 min-h-screen">

      <div className="px-10 lg:px-24 pt-20 pb-28">

        {/* Back */}
        <Link
          href="/about"
          className="text-[13px] text-neutral-500 hover:text-neutral-800 transition-colors"
        >
          ← Back
        </Link>

        {/* ================= HERO ================= */}
        <div className="mt-12 max-w-4xl">
          <h1 className="
            text-[30px] md:text-[36px] lg:text-[42px]
            font-medium
            leading-[1.15]
            tracking-[-0.02em]
          ">
            Intern 1
          </h1>

          <p className="mt-4 text-[17px] text-neutral-400 font-semibold">
            Software Engineering Intern • 2026
          </p>

          <p className="mt-6 text-[17px] text-neutral-600 leading-relaxed max-w-3xl">
            A focused engineering engagement centered on scalable system design,
            modular backend architecture, and production-ready feature delivery.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-16 h-[1px] bg-neutral-200 w-full" />

        {/* ================= OVERVIEW ================= */}
        <Section
          title="Overview"
          content={[
            "Describe the organization and product ecosystem.",
            "Explain where your work fit into the broader system architecture."
          ]}
        />

        {/* ================= ROLE & SCOPE ================= */}
        <Section
          title="Role & Scope"
          content={[
            "Outline responsibilities.",
            "Mention ownership areas and cross-team collaboration."
          ]}
        />

        {/* ================= SYSTEMS BUILT ================= */}
        <Section
          title="Systems Built"
          content={[
            "Describe backend modules, APIs, or UI systems built.",
            "Mention scalability considerations and architecture choices."
          ]}
        />

        {/* ================= TECHNICAL DECISIONS ================= */}
        <Section
          title="Technical Decisions"
          content={[
            "Why certain stack decisions were made.",
            "Trade-offs considered.",
            "Performance and maintainability strategies."
          ]}
        />

        {/* ================= IMPACT ================= */}
        <Section
          title="Impact"
          content={[
            "Quantifiable improvements (if any).",
            "User or system-level outcomes."
          ]}
        />

        {/* ================= REFLECTION ================= */}
        <Section
          title="Reflection"
          content={[
            "Key learnings.",
            "How this experience shaped your engineering mindset."
          ]}
        />

      </div>
    </main>
  );
}

/* ================= REUSABLE SECTION COMPONENT ================= */

function Section({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <div className="mb-20 max-w-4xl">

      <h2 className="
        text-[20px] md:text-[22px]
        font-medium
        tracking-[-0.01em]
        mb-6
      ">
        {title}
      </h2>

      <div className="space-y-5 text-[16px] text-neutral-600 leading-relaxed max-w-3xl">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

    </div>
  );
}