import { Tile } from "./types"

export const allTiles: Tile[] = [
  {
    id: "aegis",
    title: "Aegis",
    subtitle: "Enterprise Security System",
    year: "2025",
    image: "/images/aegis.png",
    href: "/work/aegis",
    variant: "work",
    layout: {
      base: "normal",
      md: "wide",
      xl: "normal"
    },
    pages: ["home", "work"]
  },
  {
    id: "musings",
    title: "Musings",
    subtitle: "Thoughts & Experiments",
    year: "2025",
    image: "/images/musings.png",
    href: "/work/musings",
    variant: "idea",
    layout: {
      base: "normal",
      md: "normal",
      xl: "tall"
    },
    pages: ["home"]
  }
]