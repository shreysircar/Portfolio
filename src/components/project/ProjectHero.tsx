// src/components/project/ProjectHero.tsx

type HeroProps = {
  hero: {
    gradient: string;
    desktopImage?: string;
    mobileImage?: string;
  };
};

export default function ProjectHero({ hero }: HeroProps) {
  return (
    <div
      className={`w-full h-[520px] md:h-[620px] flex items-center justify-center relative overflow-hidden ${hero.gradient}`}
    >
      <div className="relative flex items-center justify-center gap-8">

        {hero.desktopImage && (
          <img
            src={hero.desktopImage}
            alt="Desktop preview"
            className="w-[700px] max-w-[90vw] drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
          />
        )}

        {hero.mobileImage && (
          <img
            src={hero.mobileImage}
            alt="Mobile preview"
            className="hidden md:block w-[220px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          />
        )}
      </div>

      {/* Soft bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}