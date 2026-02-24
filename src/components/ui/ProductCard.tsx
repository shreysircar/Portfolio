import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  subtitle: string;
  year: string;
  image: string;
  href?: string;
  variant?: "tall" | "medium" | "wide" | "square";
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
    ? "aspect-[3/5]"
    : variant === "wide"
    ? "aspect-[16/10]"
    : variant === "square"
    ? "aspect-square"
    : "aspect-[4/5]";

  const CardInner = (
<div className={`group ${variant === "square" ? "w-[65%]" : "w-full"}`}>

      {/* Image Frame */}
      <div
className={`
  relative
  w-full
  ${aspectClass}
  bg-white
  rounded-xl
  overflow-hidden
  border border-black/5
  shadow-[0_3px_10px_rgba(0,0,0,0.04)]
  transition-all duration-300 ease-out
  group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
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
    <div className="text-[15px] font-semibold text-[#2C2C2C]">
      {title}
    </div>
    <div className="text-[13px] font-medium text-[#8A8A8A]">
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