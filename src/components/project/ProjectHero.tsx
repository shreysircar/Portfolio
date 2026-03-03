// src/components/project/ProjectHero.tsx

type HeroProps = {
  hero: {
    colors: string[];
    desktopImage?: string;
    mobileImage?: string;
    video?: string; // NEW
  };
};

export default function ProjectHero({ hero }: HeroProps) {
  const [c1, c2, c3] = hero.colors;

  const hasDesktop = !!hero.desktopImage;
  const hasMobile = !!hero.mobileImage;
  const hasBoth = hasDesktop && hasMobile;
  const hasVideo = !!hero.video;

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
      <div className="relative flex items-center justify-center">

        {/* VIDEO MODE */}
     {hasVideo && (
  <div className="relative">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="
        w-[820px]
        md:w-[900px]
        max-w-[88vw]
        rounded-2xl
        shadow-[0_60px_140px_rgba(0,0,0,0.45)]
      "
    >
      <source src={hero.video} type="video/mp4" />
    </video>

    {/* Subtle glow layer */}
    <div className="absolute inset-0 -z-10 rounded-3xl blur-3xl bg-black/40 scale-110" />
  </div>
)}

        {/* IMAGE MODE */}
        {!hasVideo && (
          <div
            className={`relative flex items-center justify-center ${
              hasBoth ? "gap-12" : ""
            }`}
          >
            {hasDesktop && (
              <img
                src={hero.desktopImage}
                alt="Desktop preview"
                className={`${
                  hasBoth ? "w-[720px]" : "w-[880px]"
                } max-w-[92vw] drop-shadow-[0_50px_120px_rgba(0,0,0,0.4)]`}
              />
            )}

            {hasMobile && (
              <img
                src={hero.mobileImage}
                alt="Mobile preview"
                className={`${
                  hasBoth ? "hidden md:block w-[260px]" : "w-[320px]"
                } drop-shadow-[0_40px_100px_rgba(0,0,0,0.45)]`}
              />
            )}
          </div>
        )}
      </div>

    </div>
  );
}