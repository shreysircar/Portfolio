"use client";
import { primaryNav, sections } from "@/data/sidebarData";
import Link from "next/link";
import { useState } from "react";
import { PanelLeft } from "lucide-react";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
<aside
  className={`
    fixed
    left-0
    top-0
    z-[9999]
    ${isOpen ? "w-[165px]" : "w-[40px]"}
    h-screen
    shrink-0
    bg-white
    border-r border-[#E6E6E4]
    overflow-hidden
    transition-all duration-300
  `}
  
>
  {/* Toggle Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="absolute top-3 left-3 p-1 rounded-md hover:bg-neutral-100 transition-colors duration-150"
>
  <PanelLeft size={18} strokeWidth={1.8} />
</button>
{isOpen && (
  <div className="pt-[52px] pl-[24px] pr-3 space-y-[12px] pb-5">

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
  {primaryNav.map((item) => {
    const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto:");

    return isExternal ? (
      <a
        key={item.label}
        href={item.href}
        className="block font-semibold tracking-[-0.01em] text-neutral-800 hover:text-neutral-400 transition-colors duration-150"
      >
        {item.label}
      </a>
    ) : (
      <Link
        key={item.label}
        href={item.href}
        className="block font-semibold tracking-[-0.01em] text-neutral-800 hover:text-neutral-400 transition-colors duration-150"
      >
        {item.label}
      </Link>
    );
  })}
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
{section.items.map((item) => {
  const isExternal = item.external;

  return isExternal ? (
    <a
      key={item.label}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block tracking-[-0.01em] text-neutral-800 hover:text-neutral-400 transition-colors duration-150"
    >
      {item.label}
    </a>
  ) : (
    <Link
      key={item.label}
      href={item.href}
      className="block tracking-[-0.01em] text-neutral-800 hover:text-neutral-400 transition-colors duration-150"
    >
      {item.label}
    </Link>
  );
})}
</div>

            {/* Add divider between sections except last */}
            {index !== sections.length - 1 && (
<div className="ml-[-24px] mr-[-12px] border-t border-[#E6E6E4] mt-[10px]" />
            )}

          </div>
        ))}

  </div>
)}
    </aside>
  );
}