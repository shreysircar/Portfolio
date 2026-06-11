"use client";

import Image from "next/image";

export default function BirlasoftPage() {
return ( <main className="bg-[#F3F3F3] text-neutral-900 min-h-screen"> <div className="px-10 lg:px-24 pt-20 pb-24">

```
    {/* ================= HERO ================= */}
    <div className="max-w-5xl">
      <p className="text-[13px] uppercase tracking-[0.18em] text-neutral-400 mb-3">
        Internship
      </p>

      <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-medium tracking-[-0.03em] leading-[1.05]">
        Birlasoft Ltd
      </h1>

      <p className="mt-3 text-[17px] text-neutral-500 font-medium">
        Intern | June – July 2026
      </p>

      <p className="mt-6 text-[18px] text-neutral-600 leading-relaxed max-w-3xl">
        ——————————————————————————————————————————————
      </p>

      <div className="mt-8 flex flex-wrap gap-3 max-w-3xl">
        {["—", "—", "—", "—", "—"].map((tech) => (
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
        ——————————————————————————————————————————————
        <br />
        ————————————————————————————————
      </p>
    </section>

    {/* ================= ARCHITECTURE ================= */}
    <section className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-5">
          Architecture
        </h2>

        <div className="space-y-4 text-[17px] text-neutral-600 leading-relaxed">
          <p>————————————————————————————</p>
          <p>————————————————————————————</p>
          <p>————————————————————————————</p>
          <p>————————————————————————————</p>
        </div>
      </div>

      <div>
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
          <Image
            src="/experience/intern2.png"
            alt="Birlasoft Logo"
            fill
            className="object-contain p-8"
          />
        </div>

        <p className="mt-3 text-[13px] text-neutral-500">
          Birlasoft Ltd
        </p>
      </div>
    </section>

    {/* ================= CONTRIBUTIONS ================= */}
    <section className="mt-20">
      <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-8">
        Engineering Contributions
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
        <div>
          <h3 className="text-[14px] uppercase tracking-[0.15em] text-neutral-400 mb-4">
            Core Systems
          </h3>

          <ul className="space-y-2 text-[17px] text-neutral-600">
            <li>————————————————————</li>
            <li>————————————————————</li>
            <li>————————————————————</li>
            <li>————————————————————</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] uppercase tracking-[0.15em] text-neutral-400 mb-4">
            Engineering Focus
          </h3>

          <ul className="space-y-2 text-[17px] text-neutral-600">
            <li>————————————————————</li>
            <li>————————————————————</li>
            <li>————————————————————</li>
            <li>————————————————————</li>
          </ul>
        </div>
      </div>
    </section>

    {/* ================= METRICS ================= */}
    <section className="mt-24">
      <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-8">
        Performance
      </h2>

      <div className="grid sm:grid-cols-3 gap-10 max-w-5xl">
        <Metric value="--" label="——————————————" />
        <Metric value="--" label="——————————————" />
        <Metric value="--" label="——————————————" />
      </div>
    </section>

    {/* ================= REFLECTION ================= */}
    <section className="mt-24 max-w-4xl">
      <h2 className="text-[26px] tracking-[-0.02em] font-medium mb-5">
        Reflection
      </h2>

      <p className="text-[18px] text-neutral-600 leading-relaxed">
        ——————————————————————————————————————————————
        <br />
        ————————————————————————————————
      </p>
    </section>

  </div>
</main>


);
}

function Metric({ value, label }: { value: string; label: string }) {
return ( <div> <p className="text-[40px] tracking-[-0.03em] font-medium">
{value} </p>


  <div className="mt-2 h-[1px] bg-neutral-300 w-8" />

  <p className="mt-3 text-[15px] text-neutral-500 leading-snug">
    {label}
  </p>
</div>


);
}
