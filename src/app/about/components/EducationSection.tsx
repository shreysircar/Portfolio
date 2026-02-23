"use client"
import Image from "next/image"

export default function EducationSection() {
  return (
    <section className="px-10 lg:px-24 py-28 border-t border-neutral-200">
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6">
            Education
          </div>

          <h2 className="text-3xl font-medium mb-2">
            University Name
          </h2>

          <div className="text-neutral-500 mb-4">
            Degree · Year
          </div>

          <p className="text-neutral-600 leading-[1.8]">
            Description...
          </p>
        </div>

        <div className="relative w-full h-80 rounded-2xl overflow-hidden image-fade">
          <Image src="/about/campus.jpg" alt="" fill className="object-cover"/>
        </div>

      </div>
    </section>
  )
}