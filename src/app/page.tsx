import ProductCard from "@/components/ui/ProductCard";

export default function Home() {
  return (
<div className="px-6 py-16">

      {/* Intro */}
      <p className="text-sm text-neutral-400 mb-6">
        Hello there, 欢迎!
      </p>

      <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-800 max-w-4xl">
        Shrey is crafting systems and interfaces
        that feel natural and useful.
      </h1>

      {/* Three Column Editorial Layout */}
 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-3">

          <ProductCard
            title="Musings"
            subtitle="Mobile App"
            year="2023-2024"
            image="/images/musings.png"
            href="/work/musings"
            variant="tall"
          />

          <ProductCard
            title="Pagex"
            subtitle="Web Platform"
            year="2026"
            image="/images/pagex.png"
            href="/work/pagex"
            variant="wide"
          />

        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-3">

          <ProductCard
            title="Vaaya"
            subtitle="Web Platform"
            year="2025-2026"
            image="/images/vaaya.png"
            href="/work/vaaya"
            variant="wide"
          />

            <ProductCard
            title="Aegis"
            subtitle="Web/Mobile Platform"
            year="2025"
            image="/images/musings.png"
            href="/work/aegis"
            variant="medium"
          />

        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-3">

     <ProductCard
            title="Aegis"
            subtitle="Web/Mobile Platform"
            year="2025"
            image="/images/musings.png"
            href="/work/aegis"
            variant="medium"
          />
     <ProductCard
            title="Aegis"
            subtitle="Web/Mobile Platform"
            year="2025"
            image="/images/musings.png"
            href="/work/aegis"
            variant="tall"
          />
        </div>

      </div>
    </div>
  );
}