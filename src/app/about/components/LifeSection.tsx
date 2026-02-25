"use client"
import Image from "next/image"

export default function LifeSection() {
  return (
<section className="px-10 lg:px-24 pt-5 pb-24 ">
<div className="mb-4">
  <div className="h-[1px] bg-neutral-200 w-[95%]" />
</div>
      {/* Section Label */}
      <div className="mb-10">
        <p className="
          text-[11px] md:text-[12px]
          tracking-[0.18em]
          text-neutral-400
          uppercase
        ">
          Beyond Engineering
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-8">

          <h2 className="
            text-[24px] md:text-[26px] lg:text-[28px]
            font-medium
            leading-[1.35]
            tracking-[-0.01em]
          ">
            Creative discipline and competitive focus shape how I build systems.
          </h2>

          <div className="space-y-6 text-[12px] text-neutral-600 leading-relaxed">

<p>
  Trained in Hindustani classical music, I create vocal covers and original productions across digital platforms, building an audience of 3K+ on Instagram and 150+ on YouTube.
</p>

<p>
  I work with DAWs including Cubase, Nuendo, and FL Studio, and play multiple instruments — guitar, synth, piano, and xylophone — exploring genres beyond classical.
</p>

<p>
  I also play lawn tennis and football, and follows the game closely as an FC Barcelona supporter — experiences that reinforce discipline, rhythm, and focus beyond engineering.
</p>


          </div>

        </div>

     
{/* RIGHT IMAGE LAYOUT */}
<div className="relative w-[72%]">

  {/* Fog Overlay */}
  <div className="pointer-events-none absolute inset-0 z-10">
    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F3F3F3]/60 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F3F3F3]/60 to-transparent" />
    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F3F3F3]/60 to-transparent" />
    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F3F3F3]/60 to-transparent" />
  </div>

  <div className="flex flex-col gap-4 relative z-0">

    {/* Top Row */}
    <div className="flex gap-4 items-end">

      {/* Music */}
      <div className="relative w-65 aspect-[3/4] rounded-xl overflow-hidden">
        <Image
          src="/about/music.png"
          alt="Music production"
          fill
          className="object-cover"
        />
      </div>

      {/* Travel */}
      <div className="relative w-72 aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src="/about/travel.jpg"
          alt="Travel or cafe"
          fill
          className="object-cover"
        />
      </div>

    </div>

    {/* Bottom Row - Sports */}
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
      <Image
        src="/about/sports.png"
        alt="Tennis or football"
        fill
        className="object-cover"
      />
    </div>
    {/* Random Image (new) */}
    <div className="flex justify-end">
       <div className="relative w-[75%] aspect-[5/4] rounded-xl overflow-hidden">
      <Image
        src="/about/random.png"
        alt="Random moment"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>
</div>
  </div>
    </section>
  )
}