import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  subtitle: string;
  year: string;
  image: string;
  href?: string;
  variant?: "tall" | "medium" | "wide";
};

export default function ProductCard({
  title,
  subtitle,
  year,
  image,
  href,
  variant = "medium",
}: ProductCardProps) {

  // 🔥 Height control
  const aspectClass =
    variant === "tall"
      ? "aspect-[3/5]"      // clearly taller
      : variant === "wide"
      ? "aspect-[16/10]"    // shorter / landscape
      : "aspect-[4/5]";     // balanced

  const CardInner = (
    <div className="group w-full">

      {/* Image Frame */}
      <div
       className={`
  relative
  w-full
  ${aspectClass}
  bg-[#F3F3F1]
  rounded-xl
  overflow-hidden
  border border-black/5
  shadow-[0_8px_24px_rgba(0,0,0,0.06)]
  transition-all duration-300 ease-out
  group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)]
`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Typography */}
      <div className="mt-3 flex items-start justify-between">

        <div className="leading-tight">
          <div className="text-[15px] font-medium text-[#2C2C2C]">
            {title}
          </div>
          <div className="text-[13px] text-[#8A8A8A]">
            {subtitle}
          </div>
        </div>

        <div className="text-[12px] text-[#9A9A9A]">
          {year}
        </div>

      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full cursor-pointer">
        {CardInner}
      </Link>
    );
  }

  return <div className="w-full">{CardInner}</div>;
}