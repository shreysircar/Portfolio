import { homeTiles } from "@/data/homeTiles";
import Tile from "@/components/ui/Tile";
export default function TileGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        auto-rows-[28px]
        gap-8
      "
    >
      {homeTiles.map((tile) => (
        <Tile key={tile.title} {...tile} />
      ))}
    </div>
  );
}