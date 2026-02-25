"use client";

import ProductCard from "@/components/ui/ProductCard";

export default function ExperienceSection() {
  return (
    <section className="mb-10">

      {/* Horizontal Rule */}
      <div className="px-10 lg:px-24 mb-3">
        <div className="h-[1px] bg-neutral-200 w-full" />
      </div>

      {/* Section Label */}
      <div className="px-10 lg:px-24 mb-8">
        <p className="
          text-[11px] md:text-[12px]
          tracking-[0.18em]
          text-neutral-400
          uppercase
        ">
          Experience
        </p>
      </div>

      {/* Cards */}
      <div className="px-10 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ProductCard
            title="DotBotics Pvt Ltd"
            subtitle="SDE Intern"
            year="2025"
            image="/experience/intern1.png"
            href="/experience/intern1"
            variant="square"
          />          


        </div>
      </div>

    </section>
  );
}