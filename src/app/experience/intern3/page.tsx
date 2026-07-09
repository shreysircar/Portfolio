"use client";

import Image from "next/image";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Git",
  "SEO",
];

export default function Intern3Page() {
  return (
    <main className="bg-[#F3F3F3] text-neutral-900 min-h-screen">
      <div className="px-10 lg:px-24 pt-20 pb-24">
        {/* ================= HERO ================= */}
        <div className="max-w-5xl">
          <p className="text-[13px] uppercase tracking-[0.18em] text-neutral-400 mb-3">
            Internship
          </p>

          <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-medium tracking-[-0.03em] leading-[1.05]">
            Ribionic Solutions
          </h1>

          <p className="mt-3 text-[17px] text-neutral-500 font-medium">
            Software Engineer Intern (Frontend) | March – May 2026
          </p>

          {/* Live Website */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-[13px] uppercase tracking-[0.15em] text-neutral-400">
              Live Website
            </span>

            <a
              href="https://ribionic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-[#025A6A] hover:underline"
            >
              ribionic.com ↗
            </a>
          </div>

          <p className="mt-6 text-[18px] text-neutral-600 leading-relaxed max-w-3xl">
            Designed, developed, and deployed Ribionic Solutions' official
            corporate website, replacing a legacy WordPress implementation with
            a modern Next.js application focused on performance, scalability,
            and user experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 max-w-3xl">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-[13px] border border-neutral-300 rounded-full text-neutral-600 bg-white/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-[1px] bg-neutral-200 w-full" />

        {/* ================= CONTEXT ================= */}
        <section className="mt-16 max-w-4xl">
          <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-5">
            Context
          </h2>

          <p className="text-[17px] text-neutral-600 leading-relaxed max-w-3xl">
            Developed a production-ready corporate website showcasing
            Ribionic's ERP ecosystem, products, services, and company identity
            through a responsive, component-driven frontend built with Next.js.
          </p>
        </section>

        {/* ================= IMPLEMENTATION ================= */}
        <section className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-5">
              Implementation
            </h2>

            <div className="space-y-4 text-[17px] text-neutral-600 leading-relaxed">
              <p>
                Developed reusable UI components and responsive layouts using
                the Next.js App Router and Tailwind CSS.
              </p>

              <p>
                Built interactive landing sections, responsive navigation,
                smooth animations, and consistent design patterns across the
                website.
              </p>

              <p>
                Optimized performance, SEO, and deployment through Next.js best
                practices and Vercel hosting.
              </p>
            </div>
          </div>

          <div>
            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              {/* Replace with website video when available */}
              <Image
                src="/experience/ribionic-preview.png"
                alt="Ribionic Corporate Website"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-3 text-[13px] text-neutral-500">
              Ribionic Solutions — Enterprise Corporate Website
            </p>
          </div>
        </section>

        {/* ================= CONTRIBUTIONS ================= */}
        <section className="mt-20">
          <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-8">
            Contributions
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <h3 className="text-[14px] uppercase tracking-[0.15em] text-neutral-400 mb-4">
                Development
              </h3>

              <ul className="space-y-2 text-[17px] text-neutral-600">
                <li>Responsive multi-page interface development</li>
                <li>Reusable component-based architecture</li>
                <li>Interactive animations & UI enhancements</li>
                <li>Mobile-first responsive design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[14px] uppercase tracking-[0.15em] text-neutral-400 mb-4">
                Deployment
              </h3>

              <ul className="space-y-2 text-[17px] text-neutral-600">
                <li>SEO & metadata optimization</li>
                <li>Image optimization with Next.js</li>
                <li>Production deployment on Vercel</li>
                <li>Custom domain & DNS configuration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= HIGHLIGHTS ================= */}
        <section className="mt-24">
          <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-8">
            Highlights
          </h2>

          <div className="grid sm:grid-cols-3 gap-10 max-w-5xl">
            <Metric value="10+" label="Responsive Pages" />
            <Metric value="15+" label="Reusable Components" />
            <Metric value="Live" label="ribionic.com" />
          </div>
        </section>

        {/* ================= REFLECTION ================= */}
        <section className="mt-24 max-w-4xl">
          <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-5">
            Reflection
          </h2>

          <p className="text-[18px] text-neutral-600 leading-relaxed">
            This internship strengthened my frontend engineering skills through
            the development of a production-ready Next.js application,
            reinforcing best practices in responsive design, reusable
            architecture, performance optimization, and modern web deployment.
          </p>
        </section>
      </div>
    </main>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-[40px] tracking-[-0.03em] font-medium">{value}</p>

      <div className="mt-2 h-[1px] bg-neutral-300 w-8" />

      <p className="mt-3 text-[15px] text-neutral-500 leading-snug">
        {label}
      </p>
    </div>
  );
}