export function getVariantClasses(variant?: string) {
  switch (variant) {
    case "work":
      return "bg-white shadow-md hover:shadow-lg"
    case "idea":
      return "bg-neutral-50 hover:bg-neutral-100"
    case "minimal":
      return "bg-transparent"
    default:
      return "bg-white"
  }
}