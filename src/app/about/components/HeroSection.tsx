"use client"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-8 pb-24">
      <div className="grid lg:grid-cols-2 items-start">

        {/* Left Text */}
<div className="pl-10 lg:pl-24 mt-16 lg:mt-20">
  <h1 className="
    text-[60px] 
    md:text-[76px] 
    lg:text-[90px]
    font-semibold 
    leading-[0.95] 
    tracking-[-0.02em]
    bg-gradient-to-r
    from-neutral-700
    via-neutral-800
    to-neutral-900
    bg-clip-text
    text-transparent
  ">
    Shrey Sircar
  </h1>

  <div className="
    mt-2 
    pl-40 
    text-[16px] 
    md:text-[18px] 
    text-neutral-500 
    tracking-[0.05em]
  ">
    /ʃreɪ ˈsɜːr.kɑːr/
  </div>
</div>
        {/* Right Images */}
        <div className="flex gap-6 items-start -mt-4">

          {/* Left Tall */}
          <div className="relative w-90 h-60 mt-30 rounded-lg overflow-hidden">
            <Image
              src="/about/hero-left.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Center Main */}
          <div className="relative w-60 h-72 mt-5 rounded-lg overflow-hidden">
            <Image
              src="/about/hero-main.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">

            {/* Square */}
            <div className="relative w-36 h-36 mt-5 rounded-lg overflow-hidden">
              <Image
                src="/about/hero-square.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Right Tall */}
            <div className="relative w-44 h-60 rounded-lg overflow-hidden opacity-70">
              <Image
                src="/about/hero-right.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

