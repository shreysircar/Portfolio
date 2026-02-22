import ProductCard from "@/components/ui/ProductCard";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-12 py-20">

      {/* Intro */}
      <p className="text-sm text-neutral-400 mb-6">
        Hello there, 欢迎!
      </p>

      <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-800">
        Shrey is crafting systems and interfaces
        that feel natural and useful.
      </h1>

      {/* Cards Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">

        <ProductCard
          title="Musings"
          subtitle="Mobile App"
          year="2023"
          image="/images/musings.png"
          href="/work/musings"
        />

        <ProductCard
          title="Vaaya"
          subtitle="Web Platform"
          year="2024"
          image="/images/vaaya.png"
          href="/work/vaaya"
        />


  <ProductCard
          title="Pagex"
          subtitle="Web Platform"
          year="2024"
          image="/images/pagex.png"
          href="/work/pagex"
        />
      </div>
    </div>
  );
}