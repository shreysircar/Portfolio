"use client";

import ProductCard from "@/components/ui/ProductCard";
import { useState } from "react";
import MacModal from "@/components/ui/MacModal";

export default function Home() {

  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
  <div className="px-6 pt-2 pb-16">  {/* reduced top padding further */}

  {/* Top Row */}
  <div className="flex justify-between items-start mb-6">

    <p className="text-base text-neutral-500">
      Hello there, 欢迎!
    </p>

    <p className="text-base text-neutral-500">
      {formattedDate} &nbsp; {formattedTime}
    </p>

  </div>

  {/* Editorial Hero Text */}
  <div className="max-w-5xl mb-6">
    <h1 className="
      text-[28px] md:text-[30px] lg:text-[35px]
      font-medium
      leading-[1.25]
      tracking-[-0.01em]
      bg-gradient-to-r
      from-neutral-400
      via-neutral-600
      to-neutral-800
      bg-clip-text
      text-transparent
    ">
Shrey engineers scalable, production-grade systems grounded in modular architecture and efficient design. He builds performance-driven applications — optimizing APIs, data flow, and databases to deliver reliable software at scale.
    </h1>
  </div>

{/* Section Divider */}
<div className="mt-4 mb-3">
  <div className="h-px w-full bg-neutral-200 mb-3" />

  <p className="text-[12px] tracking-[0.06em] text-neutral-400">
    WORK
  </p>
</div>

      {/* Three Column Editorial Layout */}
 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-3">

          <ProductCard
            title="Musings"
            subtitle="Minimal Music App"
            year="2023-2024"
            image="/images/musings.png"
            href="/work/musings"
            variant="tall"
          />

          <ProductCard
            title="Pagex"
            subtitle="Web Platform"
            year="2026"
            image="/images/pagex.png"
            href="/work/pagex"
            variant="wide"
          />

        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-3">

          <ProductCard
            title="Vaaya"
            subtitle="Web Platform"
            year="2025-2026"
            image="/images/vaaya.png"
            href="/work/vaaya"
            variant="wide"
          />

            <ProductCard
            title="Aegis"
            subtitle="Web/Mobile Platform"
            year="2025"
            image="/images/musings.png"
            href="/work/aegis"
            variant="medium"
          />

        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-3">

     <ProductCard
            title="Aegis"
            subtitle="Web/Mobile Platform"
            year="2025"
            image="/images/musings.png"
            href="/work/aegis"
            variant="medium"
          />
     <ProductCard
            title="Aegis"
            subtitle="Web/Mobile Platform"
            year="2025"
            image="/images/musings.png"
            href="/work/aegis"
            variant="tall"
          />
        </div>

      </div>


{/* Skills Divider */}
<div className="mt-20 mb-8">
  <div className="h-px w-full bg-neutral-200 mb-4" />
  <p className="text-[20px] font-medium text-neutral-700 tracking-tight">
    Skills & Technologies
  </p>
</div>

<div className="space-y-4 text-[18px] text-neutral-700 max-w-5xl">
  {[
    "Web Engineering",
    "Mobile Systems",
    "Backend & Architecture",
    "Algorithms & Problem Solving",
    "Tooling & Collaboration",
  ].map((item) => (
    <button
      key={item}
      onClick={() => {
        setActiveSkill(item);
        setMinimized(false);
      }}
      className="block hover:text-neutral-400 transition-colors"
    >
      {item}
    </button>
  ))}
</div>
{/* Mac Modal */}
<MacModal
  isOpen={!!activeSkill && !minimized}
  title={activeSkill || ""}
  expanded={expanded}
  onClose={() => {
    setActiveSkill(null);
    setExpanded(false);
  }}
  onMinimize={() => setMinimized(true)}
  onExpand={() => setExpanded(!expanded)}
>
  <div className="space-y-4 text-[14px] leading-relaxed">

    {activeSkill === "Web Engineering" && (
      <>
        <p>Production-ready web platforms built with scalable architectures.</p>
        <p>• React.js, Next.js, Node.js, Express</p>
        <p>• PostgreSQL, Prisma ORM</p>
      </>
    )}

    {activeSkill === "Mobile Systems" && (
      <>
        <p>Cross-platform applications with real-time data pipelines.</p>
        <p>• Flutter / Dart</p>
        <p>• Firebase integration</p>
      </>
    )}

    {activeSkill === "Backend & Architecture" && (
      <>
        <p>Modular, secure systems grounded in clean architecture.</p>
        <p>• JWT Authentication</p>
        <p>• SOLID principles</p>
      </>
    )}

    {activeSkill === "Algorithms & Problem Solving" && (
      <>
        <p>Competitive programming and algorithmic challenges in C++.</p>
        <p>• Graph Algorithms</p>
        <p>• Dynamic Programming</p>
      </>
    )}

    {activeSkill === "Tooling & Collaboration" && (
      <>
        <p>Structured engineering workflows.</p>
        <p>• Git/GitHub</p>
        <p>• Postman API testing</p>
      </>
    )}

  </div>
</MacModal>

{/* Minimized Dock */}
{minimized && activeSkill && (
  <div
    onClick={() => setMinimized(false)}
    className="fixed bottom-6 right-6 bg-white shadow-lg border border-neutral-200 rounded-full px-4 py-2 cursor-pointer text-sm text-neutral-600"
  >
    {activeSkill}
  </div>
)}

</div>
  );
}