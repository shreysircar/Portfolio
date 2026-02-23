"use client"
import Image from "next/image"

export default function InfoSection() {
  return (
    <section className="px-10 lg:px-24 py-32">
      <div className="grid lg:grid-cols-3 gap-16 items-start">

        <div className="relative w-full h-72 rounded-2xl overflow-hidden image-fade">
          <Image src="/about/craft.jpg" alt="" fill className="object-cover"/>
        </div>

        <div className="relative w-full h-[520px] rounded-2xl overflow-hidden image-fade">
          <Image src="/about/journey.jpg" alt="" fill className="object-cover"/>
        </div>

        <div className="max-w-xl">
          <div className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6">
            Info
          </div>

          <p className="text-[17px] leading-[1.8] text-neutral-600">
            Your long editorial paragraph goes here...
          </p>
        </div>

      </div>
    </section>
  )
}