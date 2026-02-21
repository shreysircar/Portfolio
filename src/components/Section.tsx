"use client";

import FadeIn from "./FadeIn";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-sm tracking-widest text-neutral-500 mb-10">
            {title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}