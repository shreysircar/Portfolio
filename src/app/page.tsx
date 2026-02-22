import TileGrid from "@/components/tiles/TileGrid"
import { homeTiles } from "@/data/tiles/home"

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">
        Building Systems & Products
      </h1>

      <TileGrid tiles={homeTiles} />
    </>
  )
}