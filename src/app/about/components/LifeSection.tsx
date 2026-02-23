"use client"
import Image from "next/image"

export default function LifeSection() {
  return (
    <section className="px-10 lg:px-24 py-28 border-t border-neutral-200">
      <div className="grid lg:grid-cols-2 gap-20 items-start">

        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
            Things I Love To Do
          </div>

          <h2 className="text-4xl leading-[1.4] font-medium">
            Traveling to new cities<br/>
            Visit aesthetic cafes<br/>
            Snowboard in Hokkaido
          </h2>
        </div>

        <div className="flex gap-6">
          <div className="relative w-64 h-[420px] rounded-2xl overflow-hidden image-fade">
            <Image src="/about/snow.jpg" alt="" fill className="object-cover"/>
          </div>

          <div className="relative w-64 h-[420px] rounded-2xl overflow-hidden image-fade">
            <Image src="/about/cafe.jpg" alt="" fill className="object-cover"/>
          </div>
        </div>

      </div>
    </section>
  )
}