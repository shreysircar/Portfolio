export function getLayoutClasses(layout?: {
  base?: "normal" | "wide" | "tall"
  md?: "normal" | "wide" | "tall"
  xl?: "normal" | "wide" | "tall"
}) {
  const classes = []

  if (layout?.base === "wide") classes.push("col-span-1")
  if (layout?.base === "tall") classes.push("row-span-2")

  if (layout?.md === "wide") classes.push("md:col-span-2")
  if (layout?.md === "tall") classes.push("md:row-span-2")

  if (layout?.xl === "wide") classes.push("xl:col-span-2")
  if (layout?.xl === "tall") classes.push("xl:row-span-2")

  return classes.join(" ")
}