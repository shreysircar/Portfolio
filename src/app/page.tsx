import TileGrid from "@/components/ui/TileGrid";

export default function Home() {
  return (
    <div className="px-10 md:px-16 py-24">
      
      {/* Intro Section */}
      <div className="max-w-3xl mb-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1C1E] leading-tight">
          Building thoughtful systems across mobile and web.
        </h1>

        <p className="mt-6 text-lg text-[#6E6E73] leading-relaxed">
          Computer science student focused on structured product engineering
          and interaction systems.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto">
        <TileGrid />
      </div>

    </div>
  );
}