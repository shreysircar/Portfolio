"use client";

import Link from "next/link";
import * as Previews from "@/components/tiles";

interface TileProps {
  title: string;
  subtitle?: string;
  year?: string;
  href: string;
  preview: string;
  rowSpan: number;
}

export default function Tile({
  title,
  subtitle,
  year,
  href,
  preview,
  rowSpan,
}: TileProps) {
  const PreviewComponent =
    (Previews as any)[preview] || (() => null);

  return (
    <Link href={href}>
      <div
        style={{
          gridRow: `span ${rowSpan} / span ${rowSpan}`,
        }}
        className="
          bg-[#F5F5F7]
          rounded-3xl
          p-10
          flex
          flex-col
          justify-between
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        <div className="flex-1 flex items-center justify-center">
          <PreviewComponent />
        </div>

        <div>
          <div className="text-lg font-medium text-[#1C1C1E]">
            {title}
          </div>
          <div className="text-sm text-[#6E6E73]">
            {subtitle} {year && `· ${year}`}
          </div>
        </div>
      </div>
    </Link>
  );
}