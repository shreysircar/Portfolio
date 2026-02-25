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
    <section className="mt-1 mb-10">

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
<div className="flex justify-between items-start">

  <div className="flex justify-between items-start w-full max-w-lg group">

    <div className="space-y-3">
      <h2 className="
        text-[22px] md:text-[24px] lg:text-[26px]
        font-medium
        leading-[1.2]
        tracking-[-0.01em]
      ">
        Apeejay School, Noida
      </h2>

      <p className="text-[16px] text-neutral-400 font-semibold">
        Secondary & Senior Secondary Education
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
</div>
        {/* ================= COLLEGE ================= */}
<div className="mt-16 flex justify-between items-start">

  <div className="flex justify-between items-start w-full max-w-lg group">

    <div className="space-y-3">
      <h2 className="
        text-[22px] md:text-[24px] lg:text-[26px]
        font-medium
        leading-[1.2]
        tracking-[-0.01em]
      ">
        Jaypee Institute Of Information Technology, Noida
      </h2>

      <p className="text-[16px] text-neutral-400 font-semibold">
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
  title="Apeejay School, Noida"
  expanded={expanded}
  onClose={() => {
    setSchoolOpen(false);
    setExpanded(false);
  }}
  onMinimize={() => setMinimized(true)}
  onExpand={() => setExpanded(!expanded)}
>
  <div className="space-y-4 text-[14px] leading-relaxed">
<p>Schooling | PCMB | CBSE</p>

<p><b>Class X:</b> 96.6%</p>
<p><b>Class XII:</b> 92.2%</p>
<p><b>Scholar Badge Awardee(Grade 6–12):</b> Sustained academic distinction</p>

<p><b>Leadership:</b> Prefectorial Board — School Prefect & House Prefect. Led student coordination, discipline oversight, and formal representation.</p>

<p><b>Sports:</b> Lawn Tennis, Football</p>

<p><b>Music:</b> Best Vocalist (2×), multiple competition wins</p>

  </div>
</MacModal>

{/* College Modal */}
<MacModal
  isOpen={collegeOpen && !minimized}
  title="Jaypee Institute Of Information Technology, Noida"
  expanded={expanded}
  onClose={() => {
    setCollegeOpen(false);
    setExpanded(false);
  }}
  onMinimize={() => setMinimized(true)}
  onExpand={() => setExpanded(!expanded)}
>
  <div className="space-y-4 text-[14px] leading-relaxed">
<p><b>Bachelor of Technology — Computer Science & Engineering</b></p>

<p><b>Focused on:</b> Data structures, algorithms, operating systems, databases, and computer networks — building a strong systems-oriented foundation.</p>

<p>Applied concepts through scalable full-stack projects, backend architecture design, and structured problem solving.</p>

<p>Engaged in freelance development work and participated in multiple competitive hackathons, including Smart India Hackathon (SIH), working on rapid prototyping, collaborative system design, and real-world problem statements.</p>

<p><b>Systems Design:</b> Exposure to LLD and HLD principles, modular architecture, API design, and performance-oriented development.</p>
<p><b>Leadership & Societies:</b> Social Media and PR Head at Eloquence (Literary Society) (2023–Present); Member of Ffortissimo (Music Society) (2023–2024).</p>
<p>Internship experience translating theory into production-ready engineering practices.</p>
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