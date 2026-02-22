export type TileLayout = "normal" | "wide" | "tall"

export type Tile = {
  id: string
  title: string
  subtitle?: string
  year?: string
  image: string
  href: string

  variant?: "work" | "idea" | "minimal"

  layout?: {
    base?: TileLayout
    md?: TileLayout
    xl?: TileLayout
  }

  pages?: string[] // ["home", "work"]
}