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
}: ProductCardProps) {

  const CardInner = (
    <div className="group w-full">

      {/* Image Frame — variable height */}
      <div
        className="
          relative
          w-full
          bg-[#F3F3F1]
          rounded-xl
          overflow-hidden
          shadow-[0_6px_18px_rgba(0,0,0,0.06)]
          transition-shadow duration-300 ease-out
          group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]
        "
      >
        <Image
          src={image}
          alt={title}
          width={1600}
          height={1200}
          className="w-full h-auto object-contain"
          priority={false}
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