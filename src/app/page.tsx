"use client";
import {
  Monitor,
  Smartphone,
  Server,
  Cpu,
  Wrench,
  ArrowUpRight   // ADD THIS
} from "lucide-react";
import { motion } from "framer-motion";
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
  <div className="px-6 pt-16 pb-16">  {/* reduced top padding further */}

  {/* Top Row */}
  <div className="flex justify-between items-start mb-6">

<motion.p
  initial={{ opacity: 0, y: 10, scale: 0.97 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.2,
    delay: 0.2,
    ease: [0.16, 1, 0.3, 1], // smoother, softer ease
  }}
className="
  text-[22px]
  tracking-tight
  bg-gradient-to-r
  from-neutral-400
  via-neutral-500
  to-neutral-600
  bg-clip-text
  text-transparent
"
>
  Hello.
</motion.p>

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
      via-neutral-550
      to-neutral-700
      bg-clip-text
      text-transparent
    ">
I'm a Computer Science Engineering undergrad building end-to-end systems with layered architecture and optimized data flows, focused on maintainability, performance, and scalable design.
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
            title="DotBotics Pvt Ltd"
            subtitle="SDE Intern"
            year="2025"
            media={{
  type: "image",
  src: "/experience/intern1.png",
}}
            href="/experience/intern1"
            variant="square"
          />

            <ProductCard
            title="Aegis"
            subtitle="Web/Mobile Platform"
            year="2025"
            media={{
  type: "image",
  src: "/images/musings.png",
}}
            href="/projects/aegis"
            variant="medium"
          />


        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-3">



   <ProductCard
            title="Vaaya"
            subtitle="Web Platform"
            year="2025-2026"
            media={{
  type: "video",
  src: "/projects/vaaya/vaaya.mp4",
}}

            href="/projects/vaaya"
            variant="wide"
          />

          <ProductCard
            title="Musings"
            subtitle="Minimal Music App"
            year="2023-2024"
            media={{
  type: "video",
  src: "/projects/musings/musingslaunch.mp4",
}}
            href="/projects/musings"
                      variant="medium"
          />

        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-3">

   <ProductCard
            title="Pagex"
            subtitle="Web Platform"
            year="2026"
                        media={{
  type: "image",
  src: "/images/pagex.png",
}}
            href="/projects/pagex"
            variant="tall"
          />

      
     <ProductCard
            title="FluxNav"
            subtitle="Mobile App"
            year="2025"
                        media={{
  type: "image",
  src: "/images/flux.png",
}}
            href="/projects/fluxnav"
            variant="square"
          />
        </div>

      </div>


{/* Skills Divider */}
<div className="mt-20 mb-8">
  <div className="h-px w-full bg-neutral-200 mb-4" />
<p className="text-[12px] tracking-[0.06em] text-neutral-400">
  ENGINEERING DOMAINS
</p>
</div>

<div className="max-w-5xl divide-y divide-neutral-200">
  {[
    { label: "Web Engineering", icon: Monitor },
    { label: "Mobile Systems", icon: Smartphone },
    { label: "Backend & Architecture", icon: Server },
    { label: "Algorithms & Problem Solving", icon: Cpu },
    { label: "Tooling & Collaboration", icon: Wrench },
  ].map(({ label, icon: Icon }) => (
    <button
      key={label}
      onClick={() => {
        setActiveSkill(label);
        setMinimized(false);
      }}
      className="
        group
        w-full
        py-5
        text-left
        flex
        items-center
        justify-between
        transition-all
        duration-300
      "
    >
      <div className="flex items-center gap-4">

<Icon
  size={20}
  strokeWidth={1.5}
className="
  text-neutral-400
  group-hover:text-neutral-700
  transition-colors
"
/>

        <span className="
text-[16px]
md:text-[17px]
          font-medium
          tracking-[-0.01em]
          text-neutral-700
          group-hover:text-neutral-900
          transition-colors
        ">
          {label}
        </span>
      </div>

<ArrowUpRight
  size={18}
  strokeWidth={1.5}
  className="
    text-neutral-400
    group-hover:text-neutral-700
    transition-colors
    group-hover:translate-x-1
    group-hover:-translate-y-1
  "
/>
    </button>
  ))}
</div>
{/* Closing Statement */}
<div className="mt-8 pt-4 border-t border-neutral-200">
<motion.p
  initial={{ opacity: 0, y: 10, scale: 0.97 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.2,
    delay: 0.2,
    ease: [0.16, 1, 0.3, 1], // smoother, softer ease
  }}
className="
  text-center
  text-[22px] md:text-[24px]
  font-semibold
  tracking-[-0.01em]
  bg-gradient-to-r
  from-neutral-200
  via-neutral-500
  to-neutral-900
  bg-clip-text
  text-transparent
"
  >
    Design. Optimize. Scale.
  </motion.p>
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
        <p>I build scalable, production-ready web applications using modern React ecosystems. My focus is modular component design, predictable data flow, and performance across responsive systems.</p>
        <p><b>Tech Stack</b></p>
        <p>• React.js, Next.js (App Router)</p>
        <p>• JavaScript</p>
        <p>• RESTful APIs</p>
        <p>• Firebase, Firestore</p>
        <p>• Git/GitHub, Figma</p>
      </>
    )}

    {activeSkill === "Mobile Systems" && (
      <>
        <p>I develop cross-platform mobile systems in Flutter with clean architecture and scalable state separation. My approach ensures smooth API integration and maintainable feature growth.</p>
        <p><b>Tech Stack</b></p>
        <p>• Dart (Flutter)</p>
        <p>• Firebase</p>
        <p>• RESTful APIs</p>
        <p>• Clean Architecture principles</p>
        <p>• Git/GitHub</p>

      </>
    )}

    {activeSkill === "Backend & Architecture" && (
      <>
        <p>I design backend systems focused on structured APIs, secure authentication, and scalable database architecture. My backend philosophy emphasizes modular services and efficient data modeling.</p>
        <p><b>Tech Stack</b></p>
        <p>• Node.js, Express.js</p>
        <p>• PostgreSQL, SQL</p>
        <p>• Prisma ORM</p>
        <p>• JWT Authentication</p>
        <p>• RESTful APIs</p>
        <p>• Postman</p>
      </>
    )}

    {activeSkill === "Algorithms & Problem Solving" && (
      <>
        <p>Strong algorithmic reasoning drives my system design decisions. I apply data structures and complexity analysis to build efficient and scalable implementations.</p>
        <p><b>Core Foundations</b></p>
        <p>• C/C++</p>
        <p>• Data Structures & Algorithms</p>
        <p>• Object-Oriented Programming (OOPS)</p>
        <p>• System Design</p>
      </>
    )}

    {activeSkill === "Tooling & Collaboration" && (
      <>
        <p>I value disciplined workflows, clean version control, and structured development cycles. My tooling ensures clarity, maintainability, and efficient collaboration.</p>
        <p><b>Tools & Environment</b></p>
        <p>• Prisma Studio</p>
        <p>• Git/GitHub</p>
        <p>• Figma</p>
        <p>• Windows, Linux (Ubuntu) </p>
        <p>• SDLC practices</p>
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