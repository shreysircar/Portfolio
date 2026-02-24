"use client";

import Image from "next/image";

export default function EducationSection() {
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
      <div className="px-10 lg:px-24 space-y-28">

        {/* ================= SCHOOLING ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Text Left */}
          <div className="space-y-6 max-w-lg">
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

            <p className="text-neutral-600 leading-relaxed">
              Early academic foundation rooted in mathematics, structured reasoning,
              and analytical discipline. These formative years shaped systems thinking
              and a strong problem-solving mindset.
            </p>
          </div>

          {/* Image Right */}
          <div className="max-w-md">
            <div className="relative w-[300px] h-[250px] rounded-lg overflow-hidden">
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
            <p className="mt-4 text-sm text-neutral-500">
              School campus during graduation year
            </p>
          </div>
        </div>

        {/* ================= COLLEGE ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Image Left */}
          <div className="max-w-md">
            <div className="relative w-[300px] h-[250px] rounded-lg overflow-hidden">
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

            <p className="mt-4 text-sm text-neutral-500">
              University campus 
            </p>
          </div>

          {/* Text Right */}
          <div className="space-y-6 max-w-lg">
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

            <p className="text-neutral-600 leading-relaxed">
              Currently pursuing undergraduate studies with emphasis on
              software engineering, distributed systems, scalable backend
              design, and production-grade architecture across layered systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}