import ProductCard from "@/components/ui/ProductCard";

export default function Home() {
  return (
    <div className="px-10 py-16">

      {/* Intro */}
      <p className="text-sm text-neutral-400 mb-6">
        Hello there, 欢迎!
      </p>

      <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-800 max-w-4xl">
        Shrey is crafting systems and interfaces
        that feel natural and useful.
      </h1>

      {/* Cards Section — Apple Masonry */}
      <div className="mt-16 columns-1 md:columns-2 xl:columns-3 gap-6">
<ProductCard
  title="Musings"
  subtitle="Mobile App"
  year="2023"
  image="/images/musings.png"
  href="/work/musings"
  variant="tall"
/>

<ProductCard
  title="Vaaya"
  subtitle="Web Platform"
  year="2024"
  image="/images/vaaya.png"
  href="/work/vaaya"
  variant="wide"
/>

<ProductCard
  title="Pagex"
  subtitle="Web Platform"
  year="2024"
  image="/images/pagex.png"
  href="/work/pagex"
  variant="medium"
/>

      </div>
    </div>
  );
}