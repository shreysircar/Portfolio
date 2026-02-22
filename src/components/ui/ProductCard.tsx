import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  subtitle: string;
  year: string;
  image: string;
  href?: string;
};

export default function ProductCard({
  title,
  subtitle,
  year,
  image,
  href,
}: ProductCardProps) {
  const CardContent = (
    <div className="group">

      {/* Image Frame */}
      <div
        className="
          relative
          w-full
          aspect-[4/3]
          bg-[#F3F3F1]
          rounded-xl
          overflow-hidden
          shadow-[0_4px_12px_rgba(0,0,0,0.06)]
          transition-shadow duration-300 ease-out
          group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]
        "
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
          <div className="text-[16px] font-medium text-[#2C2C2C]">
            {title}
          </div>
          <div className="text-[14px] text-[#8A8A8A]">
            {subtitle}
          </div>
        </div>

        <div className="text-[13px] text-[#9A9A9A]">
          {year}
        </div>

      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block cursor-pointer">
        {CardContent}
      </Link>
    );
  }

  return <div>{CardContent}</div>;
}