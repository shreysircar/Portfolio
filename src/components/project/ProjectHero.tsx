// src/components/project/ProjectHero.tsx

type HeroProps = {
  hero: {
    colors: string[];
    desktopImage?: string;
    mobileImage?: string;
  };
};

export default function ProjectHero({ hero }: HeroProps) {
  const [c1, c2, c3] = hero.colors;

  const gradientStyle = {
    background: `
      radial-gradient(circle at 25% 20%, ${c1}33 0%, transparent 40%),
      radial-gradient(circle at 75% 80%, ${c2}33 0%, transparent 40%),
      linear-gradient(135deg, ${c2}, ${c3 ?? c2})
    `,
  };

  return (
    <div
      style={gradientStyle}
      className="relative left-1/2 -translate-x-1/2 w-screen h-[560px] md:h-[640px] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center gap-10">

        {hero.desktopImage && (
          <img
            src={hero.desktopImage}
            alt="Desktop preview"
            className="w-[720px] max-w-[92vw] drop-shadow-[0_40px_90px_rgba(0,0,0,0.35)]"
          />
        )}

        {hero.mobileImage && (
          <img
            src={hero.mobileImage}
            alt="Mobile preview"
            className="hidden md:block w-[240px] drop-shadow-[0_30px_70px_rgba(0,0,0,0.4)]"
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}