"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import MacModal from "@/components/ui/MacModal";
import Image from "next/image";

export default function EducationSection() {
  const [schoolOpen, setSchoolOpen] = useState(false);
const [collegeOpen, setCollegeOpen] = useState(false);
const [expanded, setExpanded] = useState(false);
const [minimized, setMinimized] = useState(false);
  return (
    <section className="mt-1 mb-20">

      {/* Horizontal Rule */}
      <div className="px-10 lg:px-24 mb-4">
        <div className="h-[1px] bg-neutral-200 w-full" />
      </div>

      {/* Section Label */}
      <div className="px-10 lg:px-24 mb-10">
        <p className="
          text-[11px] md:text-[12px]
          tracking-[0.18em]
          text-neutral-400
          uppercase
        ">
          Education
        </p>
      </div>

      {/* Main Content Container */}
      <div className="px-10 lg:px-24 space-y-10">

        {/* ================= SCHOOLING ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Text Left */}
<div className="flex justify-between items-start max-w-lg group">

  <div className="space-y-6">
    <h2 className="
      text-[22px] md:text-[24px] lg:text-[26px]
      font-medium
      leading-[1.2]
      tracking-[-0.01em]
    ">
      Your School Name
    </h2>

    <p className="text-[15px] text-neutral-400 font-semibold">
      Senior Secondary Education
    </p>

<p className="text-[12px] text-neutral-600 leading-relaxed">
      Early academic foundation rooted in mathematics, structured reasoning,
      and analytical discipline. These formative years shaped systems thinking
      and a strong problem-solving mindset.
    </p>
  </div>

  <button
    onClick={() => {
      setSchoolOpen(true);
      setMinimized(false);
    }}
    className="mt-1"
  >
    <ArrowUpRight
      size={18}
      strokeWidth={1.5}
      className="
        text-neutral-400
        group-hover:text-neutral-700
        transition-all
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
    />
  </button>
          </div>

          {/* Image Right */}
          <div className="max-w-md">
            <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/about/school.jpg"
                alt="School campus"
                fill
                className="object-cover scale-[1.02] brightness-[0.95]"
              />
{/* Softer Fog Overlay */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-gradient-to-t from-[#F3F3F3]/60 via-transparent to-[#F3F3F3]/60" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#F3F3F3]/60 via-transparent to-[#F3F3F3]/60" />
</div>
</div>
            <p className="mt-4 text-[12px] text-neutral-500">
              School campus during graduation year
            </p>
          </div>
        </div>

        {/* ================= COLLEGE ================= */}
      <div className="grid lg:grid-cols-[auto_1fr] gap-15 items-start">
          {/* Image Left */}
          <div className="max-w-md">
            <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/about/college.png"
                alt="College campus"
                fill
                className="object-cover scale-[1.02] brightness-[0.95]"
              />
{/* Softer Fog Overlay */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-gradient-to-t from-[#F3F3F3]/60 via-transparent to-[#F3F3F3]/60" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#F3F3F3]/60 via-transparent to-[#F3F3F3]/60" />
</div>
            </div>

            <p className="mt-4 text-[12px] text-neutral-500">
              University campus 
            </p>
          </div>

          {/* Text Right */}
<div className="flex justify-between items-start w-full group">

  <div className="space-y-6">
    <h2 className="
      text-[22px] md:text-[24px] lg:text-[26px]
      font-medium
      leading-[1.2]
      tracking-[-0.01em]
    ">
      Your College Name
    </h2>

    <p className="text-[15px] text-neutral-400 font-semibold">
      B.Tech in Computer Science
    </p>
<p className="text-[12px] text-neutral-600 leading-relaxed">
      Currently pursuing undergraduate studies with emphasis on
      software engineering, distributed systems, scalable backend
      design, and production-grade architecture across layered systems.
    </p>
  </div>

  <button
    onClick={() => {
      setCollegeOpen(true);
      setMinimized(false);
    }}
    className="mt-1"
  >
    <ArrowUpRight
      size={18}
      strokeWidth={1.5}
      className="
        text-neutral-400
        group-hover:text-neutral-700
        transition-all
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
    />
  </button>
          </div>
        </div>

      </div>
      {/* School Modal */}
<MacModal
  isOpen={schoolOpen && !minimized}
  title="Your School Name"
  expanded={expanded}
  onClose={() => {
    setSchoolOpen(false);
    setExpanded(false);
  }}
  onMinimize={() => setMinimized(true)}
  onExpand={() => setExpanded(!expanded)}
>
  <div className="space-y-4 text-[14px] leading-relaxed">
    <p>Academic highlights, leadership roles, achievements.</p>
    <p>Key subjects and foundational growth years.</p>
  </div>
</MacModal>

{/* College Modal */}
<MacModal
  isOpen={collegeOpen && !minimized}
  title="Your College Name"
  expanded={expanded}
  onClose={() => {
    setCollegeOpen(false);
    setExpanded(false);
  }}
  onMinimize={() => setMinimized(true)}
  onExpand={() => setExpanded(!expanded)}
>
  <div className="space-y-4 text-[14px] leading-relaxed">
    <p>Coursework, projects, internships.</p>
    <p>System design focus and technical specialization.</p>
  </div>
</MacModal>

{/* Minimized Dock */}
{minimized && (schoolOpen || collegeOpen) && (
  <div
    onClick={() => setMinimized(false)}
    className="fixed bottom-6 right-6 bg-white shadow-lg border border-neutral-200 rounded-full px-4 py-2 cursor-pointer text-sm text-neutral-600"
  >
    {schoolOpen ? "School" : "College"}
  </div>
)}
    </section>
  );
}