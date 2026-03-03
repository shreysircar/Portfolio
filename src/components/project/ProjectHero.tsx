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

  const hasDesktop = !!hero.desktopImage;
  const hasMobile = !!hero.mobileImage;
  const hasBoth = hasDesktop && hasMobile;

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
      <div
        className={`relative flex items-center justify-center ${
          hasBoth ? "gap-12" : ""
        }`}
      >
        {/* Desktop Image */}
        {hasDesktop && (
          <img
            src={hero.desktopImage}
            alt="Desktop preview"
            className={`${
              hasBoth
                ? "w-[720px]"
                : "w-[880px]"
            } max-w-[92vw] drop-shadow-[0_50px_120px_rgba(0,0,0,0.4)]`}
          />
        )}

        {/* Mobile Image */}
        {hasMobile && (
          <img
            src={hero.mobileImage}
            alt="Mobile preview"
            className={`${
              hasBoth
                ? "hidden md:block w-[260px]"
                : "w-[320px]"
            } drop-shadow-[0_40px_100px_rgba(0,0,0,0.45)]`}
          />
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-white/80 to-white" />
    </div>
  );
}