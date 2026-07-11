"use client";

import Image from "next/image";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "SMTP",
  "SEO",
  "Vercel",
  "Git",
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
            Software Engineer Intern | March – May 2026
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
  Rebuilt Ribionic Solutions' corporate website from WordPress to
  Next.js, delivering a modern, production-ready platform featuring
  responsive design, dynamic content, backend integrations, SEO
  optimization, and end-to-end deployment.
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
  Led the redevelopment of Ribionic's corporate website by migrating an
  existing WordPress implementation to Next.js, creating a scalable
  marketing platform featuring service pages, articles, contact
  workflows, newsletter integration, and a modern user experience.
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
    Rebuilt the complete website using Next.js App Router with reusable
    components, responsive layouts, and a modern design system for
    consistent user experience.
  </p>

  <p>
    Implemented dynamic articles, newsletter subscriptions, contact
    forms with SMTP email delivery, SEO-friendly routing, metadata, and
    optimized media handling across the site.
  </p>

  <p>
    Managed the complete production deployment lifecycle including
    Vercel hosting, custom domain configuration, DNS migration from
    WordPress, and performance optimization.
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
  <li>Complete WordPress to Next.js migration</li>
  <li>Reusable component-based architecture</li>
  <li>CMS-style articles and insights pages</li>
  <li>Responsive multi-page interface development</li>
  <li>Newsletter & contact form integration</li>
  <li>SMTP email workflow implementation</li>
</ul>
            </div>

            <div>
              <h3 className="text-[14px] uppercase tracking-[0.15em] text-neutral-400 mb-4">
                Deployment
              </h3>
<ul className="space-y-2 text-[17px] text-neutral-600">
  <li>SEO-friendly routing & metadata</li>
  <li>Performance & image optimization</li>
  <li>Production deployment on Vercel</li>
  <li>Custom domain & DNS migration</li>
  <li>Website launch & infrastructure setup</li>
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
    <Metric value="20+" label="Production Pages" />
    <Metric value="30+" label="Reusable Components" />
    <Metric value="Live" label="ribionic.com" />
  </div>
</section>
        {/* ================= REFLECTION ================= */}
        <section className="mt-24 max-w-4xl">
          <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-5">
            Reflection
          </h2>
<p className="text-[18px] text-neutral-600 leading-relaxed">
  This internship gave me end-to-end experience in delivering production
  software—from modern frontend development and backend integrations to
  deployment, DNS management, and performance optimization. It
  reinforced the importance of building software that is scalable,
  maintainable, and ready for real-world use.
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