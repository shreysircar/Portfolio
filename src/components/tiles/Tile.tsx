import Link from "next/link"
import Image from "next/image"
import { Tile as TileType } from "@/data/tiles/types"

type Props = {
  tile: TileType
}

export default function Tile({ tile }: Props) {
  return (
    <Link
      href={tile.href}
className="
  group
  block
  rounded-xl
  overflow-hidden
  bg-white
  border border-neutral-200
  hover:border-neutral-300
  shadow-sm
  hover:shadow-md
  transition-all
  duration-300
"
    >
      <div className="relative">
        <Image
          src={tile.image}
          alt={tile.title}
          width={1200}
          height={800}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold">
          {tile.title}
        </h3>

        {tile.subtitle && (
          <p className="text-xs text-neutral-500 mt-1">
            {tile.subtitle}
          </p>
        )}

        {tile.year && (
          <p className="text-xs text-neutral-400 mt-1">
            {tile.year}
          </p>
        )}
      </div>
    </Link>
  )
}