// src/data/sidebarData.ts

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};
export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "CV", href: "/Shrey_CV.pdf"},
];

export const sections: {
  title: string;
  items: NavItem[];
}[] = [
  {
    title: "MOBILE APPS",
    items: [
      { label: "Musings", href: "/projects/musings" },
      { label: "Aegis", href: "/projects/aegis" },
      { label: "FluxNav", href: "/projects/fluxnav"}
    ],
  },
  {
    title: "WEB APPS / WEBSITES",
    items: [
      { label: "Vaaya", href: "/projects/vaaya" },
      { label: "PageX", href: "/projects/pagex" },
    ],
  },
  {
    title: "CONNECT",
    items: [
      { label: "Mail", href: "mailto:sircarshrey@email.com", external: true },
      { label: "Instagram", href: "https://instagram.com/musingsbyshrey", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shrey-sircar-907629283/", external: true },
      { label: "Leetcode", href: "https://leetcode.com/u/shrey_2904", external: true },
      { label: "GitHub", href: "https://github.com/shreysircar", external: true },
    ],
  },
];

