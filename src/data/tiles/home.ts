import { allTiles } from "./allTiles"

export const homeTiles = allTiles.filter(tile =>
  tile.pages?.includes("home")
)