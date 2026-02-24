import { primaryNav, sections } from "@/data/sidebarData";
import Link from "next/link";
export default function Sidebar() {
  return (
<aside
  className="
    fixed
    left-0
    top-0
    w-[165px]
    h-screen
    shrink-0
    bg-white
    border-r border-[#E6E6E4]
    overflow-y-auto
  "
>

      <div className="pt-[14px] pl-[24px] pr-3 space-y-[12px] pb-5">

        {/* LOGO */}
<Link href="/" className="block w-fit">
  <img
    src="/logo.png"
    alt="Logo"
    className="w-[95px] h-auto cursor-pointer"
  />
</Link>

        {/* PRIMARY NAV */}
<nav className="space-y-[4px] text-[15px]">
  {primaryNav.map((item) => (
    <a
      key={item.label}
      href={item.href}
      download={item.href.endsWith(".pdf")}
      className="block no-underline font-semibold tracking-[-0.01em] text-[#2C2C2C] hover:text-neutral-400 transition-colors duration-150"
    >
      {item.label}
    </a>
  ))}
</nav>

        {/* DIVIDER */}
<div className="ml-[-24px] mr-[-12px] border-t border-[#E6E6E4] mt-[10px]" />

        {/* SECTIONS */}
        {sections.map((section, index) => (
          <div key={section.title} className="space-y-[4px]">

            <div className="text-[8px] tracking-[0.12em] text-[#9A9A9A]">
              {section.title}
            </div>

<div className="space-y-[4px] text-[9.5px]">
{section.items.map((item) => (
  <a
    key={item.label}
    href={item.href}
    target={item.external ? "_blank" : undefined}
    rel={item.external ? "noopener noreferrer" : undefined}
    download={item.href.endsWith(".pdf")}
    className="block no-underline tracking-[-0.01em] text-[#2C2C2C] hover:text-neutral-400 transition-colors duration-150"
  >
    {item.label}
  </a>
))}
</div>

            {/* Add divider between sections except last */}
            {index !== sections.length - 1 && (
<div className="ml-[-24px] mr-[-12px] border-t border-[#E6E6E4] mt-[10px]" />
            )}

          </div>
        ))}

      </div>
    </aside>
  );
}