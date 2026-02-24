"use client"
import Image from "next/image"

export default function InfoSection() {
  return (
    <section className="px-10 lg:px-24 pt-10 pb-24 bg-[#F3F3F3]">
<div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">

        {/* LEFT IMAGE PAIR */}
<div className="relative flex gap-4 items-start pt-10">

          {/* Fog - Top */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#F3F3F3]/90 to-transparent z-10" />

          {/* Fog - Bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F3F3F3]/90 to-transparent z-10" />

          {/* Fog - Left */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F3F3F3]/80 to-transparent z-10" />

          {/* Fog - Right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F3F3F3]/80 to-transparent z-10" />

{/* Square Image + Caption */}
<div className="flex flex-col items-start -mt-6">
  <div className="relative w-[150px] h-[150px] rounded-lg overflow-hidden shadow-md">
    <Image
      src="/about/craft.jpg"
      alt="Design and system thinking"
      fill
      className="object-cover"
    />
  </div>

<span className="mt-3 ml-12 text-[11px] text-neutral-400 tracking-wide">
    Craft & structure.
  </span>
</div>

{/* Tall Image (no offset) */}
<div className="relative w-[200px] h-[280px] rounded-lg overflow-hidden shadow-md">
  <Image
    src="/about/journey.jpg"
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
              I build systems with clarity, structure, and intentional design.
            </p>

            <p>
              My work focuses on scalable architecture, thoughtful interfaces,
              and clean abstractions that improve how people interact with
              digital products.
            </p>
            <p>
              My work focuses on scalable architecture, thoughtful interfaces,
              and clean abstractions that improve how people interact with
              digital products.
            </p>
            <p>
              I care deeply about the intersection of performance, usability,
              and aesthetics — creating software that feels considered.
            </p>
                        <p>
              I care deeply about the intersection of performance, usability,
              and aesthetics — creating software that feels considered.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}