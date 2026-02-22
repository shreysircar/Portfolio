// src/data/sidebarData.ts

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};
export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Ideas", href: "/ideas" },
  { label: "CV", href: "/cv" },
];

export const sections: {
  title: string;
  items: NavItem[];
}[] = [
  {
    title: "MOBILE APPS",
    items: [
      { label: "Musings", href: "/work/musings" },
      { label: "Aegis", href: "/work/aegis" },
    ],
  },
  {
    title: "WEB APPS / WEBSITES",
    items: [
      { label: "Vaaya", href: "/work/vaaya" },
      { label: "PageX", href: "/work/pagex" },
    ],
  },
  {
    title: "CONNECT",
    items: [
      { label: "Mail", href: "mailto:sircarshrey@email.com", external: true },
      { label: "Instagram", href: "https://instagram.com/musingsbyshrey", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shrey-sircar-907629283/", external: true },
      { label: "read.cv", href: "https://read.cv/yourhandle", external: true },
      { label: "Leetcode", href: "https://leetcode.com/u/shrey_2904", external: true },
      { label: "GitHub", href: "https://github.com/shreysircar", external: true },
    ],
  },
];

