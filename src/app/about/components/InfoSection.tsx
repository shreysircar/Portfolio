"use client"
import Image from "next/image"

export default function InfoSection() {
  return (
    <section className="px-10 lg:px-24 pt-20 pb-24 bg-[#F3F3F3]">
<div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">

        {/* LEFT IMAGE PAIR */}
<div className="relative flex gap-4 items-start pt-10">

          {/* Fog - Top */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#F3F3F3]/70 to-transparent z-10" />

          {/* Fog - Bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F3F3F3]/50 to-transparent z-10" />

          {/* Fog - Left */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F3F3F3]/40 to-transparent z-10" />

          {/* Fog - Right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F3F3F3]/20 to-transparent z-10" />

{/* Square Image Stack */}
<div className="flex flex-col items-start -mt-6 space-y-6">

  {/* First Image */}
  <div>
    <div className="relative w-[150px] h-[150px] rounded-lg overflow-hidden shadow-md">
      <Image
        src="/about/clean.png"
        alt="Design and system thinking"
        fill
        className="object-cover"
      />
    </div>

    <span className="mt-3 ml-12 block text-[11px] text-neutral-400 tracking-wide">
      Craft & structure.
    </span>
  </div>

  {/* Second Same-Sized Image */}
  <div>
    <div className="relative w-[150px] h-[120px] rounded-lg overflow-hidden shadow-md">
      <Image
        src="/about/codec.png"  // <-- change to your new image path
        alt=""
        fill
        className="object-cover"
      />
    </div>
  </div>

</div>

{/* Tall Image (no offset) */}
<div className="relative w-[200px] h-[280px] rounded-lg overflow-hidden shadow-md">
  <Image
    src="/about/setup.png"
    alt=""
    fill
    className="object-cover"
  />
</div>
        </div>

        {/* RIGHT TEXT */}
       <div className="max-w-[520px] mt-6">
          <div className="text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-4">
            Info
          </div>

          <div className="space-y-3 text-[12px] leading-[1.5] text-neutral-600">
            <p>
             I’m pursuing Computer Science with a growing focus on the systems beneath software.
            </p>

            <p>
             Over time, I’ve become drawn to architecture, modular boundaries, and the structure that sustains applications at scale.
            </p>
            <p>
             Through building production-grade platforms, I’ve learned that thoughtful abstractions and clean layering matter as much as features.
            </p>
            <p>
             I’m motivated by designing software that balances performance, clarity, and human experience — engineered with intention and discipline.
            </p>
  

          </div>
        </div>

      </div>
    </section>
  )
}