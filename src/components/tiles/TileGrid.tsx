import { Tile as TileType } from "@/data/tiles/types"
import Tile from "./Tile"

type Props = {
  tiles: TileType[]
}

export default function TileGrid({ tiles }: Props) {
  return (
<div className="
  columns-2
  md:columns-4
  lg:columns-5
  gap-6
">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="break-inside-avoid mb-6"
        >
          <Tile tile={tile} />
        </div>
      ))}
    </div>
  )
}