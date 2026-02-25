"use client"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-0 bg-[#f3f3f3]">
      <div className="grid lg:grid-cols-[1fr_1.4fr] items-start">

        {/* Left Text */}
        <div className="relative pl-10 lg:pl-24 mt-16 lg:mt-15 overflow-hidden">

          <h1 className="
            text-[60px] 
            md:text-[76px] 
            lg:text-[90px]
            font-semibold 
            leading-[0.95] 
            tracking-[-0.02em]
            bg-gradient-to-r
            from-neutral-600
            via-neutral-700
            to-neutral-800
            bg-clip-text
            text-transparent
          ">
            Shrey Sircar
          </h1>

<div className="
  mt-1
  ml-[6.25rem]
  md:ml-[7.75rem]
  lg:ml-[9.5rem]
  text-[15px] 
  md:text-[17px] 
  font-semibold
  text-neutral-400
  tracking-[0.14em]
">
  /ʃreɪ ˈsɜːr.kɑːr/
</div>

          {/* Left Fog */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-82
              bg-gradient-to-r
              from-[#f3f3f3]/80
              via-[#f3f3f3]/40
              to-transparent
            "
          />
        </div>

        {/* Right Images */}
<div className="relative flex gap-3 items-start -mt-12 overflow-hidden">

          {/* Left Edge Fog */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-28
              bg-gradient-to-r
              from-[#f3f3f3]/70
              to-transparent
              z-10
            "
          />

          {/* Right Edge Fog */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              w-28
              bg-gradient-to-l
              from-[#f3f3f3]/70
              to-transparent
              z-10
            "
          />
{/* Top Fog */}
<div
  className="
    pointer-events-none
    absolute
    top-0
    left-0
    right-0
    h-44
    bg-gradient-to-b
    from-[#f3f3f3]/60
    via-[#f3f3f3]/50
    to-transparent
    z-10
  "
/>{/* Bottom Fog */}
<div
  className="
    pointer-events-none
    absolute
    bottom-0
    left-0
    right-0
    h-44
    bg-gradient-to-t
    from-[#f3f3f3]/60
    via-[#f3f3f3]/50
    to-transparent
    z-10
  "
/>
          {/* Images */}
          <div className="relative w-100 h-55 mt-20 rounded-lg overflow-hidden shadow-md">
            <Image src="/about/hero-left.png" alt="" fill className="object-cover" />
          </div>

          <div className="relative w-100 h-60 mt-5 rounded-lg overflow-hidden shadow-md">
            <Image src="/about/hero.jpeg" alt="" fill className="object-cover" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-44 h-44 mt-0 rounded-lg overflow-hidden shadow-md">
              <Image src="/about/court.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="relative w-34 h-40 rounded-lg overflow-hidden shadow-md ">
              <Image src="/about/hero-r.PNG" alt="" fill className="object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}