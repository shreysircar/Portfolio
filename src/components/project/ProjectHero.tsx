// src/components/project/ProjectHero.tsx

type HeroProps = {
  hero: {
    colors: string[];
    desktopImage?: string;
    mobileImage?: string;
    desktopVideo?: string;
    mobileVideo?: string;
  };
};

export default function ProjectHero({ hero }: HeroProps) {
  const [c1, c2, c3] = hero.colors;

  // Video checks
  const hasDesktopVideo = !!hero.desktopVideo;
  const hasMobileVideo = !!hero.mobileVideo;
  const hasAnyVideo = hasDesktopVideo || hasMobileVideo;
  const isMobileOnly = hasMobileVideo && !hasDesktopVideo;

  // Image checks
  const hasDesktop = !!hero.desktopImage;
  const hasMobile = !!hero.mobileImage;
  const hasBoth = hasDesktop && hasMobile;

  const gradientStyle = {
    background: `
      radial-gradient(circle at 20% 30%, ${c1}55 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, ${c2}55 0%, transparent 50%),
      linear-gradient(180deg, ${c3 ?? c2}, ${c1})
    `,
  };

  return (
    <div
      style={gradientStyle}
      className={`
  relative left-1/2 -translate-x-1/2 w-screen
  ${isMobileOnly ? "h-[480px] md:h-[540px]" : "h-[560px] md:h-[640px]"}
  flex items-center justify-center overflow-hidden
`}
    >
      <div className="relative flex items-center justify-center">

        {/* DESKTOP VIDEO */}
        {hasDesktopVideo && (
          <div className="relative flex justify-center">
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
              <source src={hero.desktopVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 -z-10 rounded-3xl blur-3xl bg-black/40 scale-110" />
          </div>
        )}

        {/* MOBILE VIDEO */}
        {hasMobileVideo && (
          <div className="relative flex justify-center">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
w-[200px]
sm:w-[220px]
md:w-[240px]
                max-w-[80vw]
                rounded-3xl
                shadow-[0_40px_100px_rgba(0,0,0,0.45)]
              "
            >
              <source src={hero.mobileVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 -z-10 rounded-3xl blur-3xl bg-black/30 scale-110" />
          </div>
        )}

        {/* IMAGE MODE */}
        {!hasAnyVideo && (
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