import { primaryNav, sections } from "@/data/sidebarData";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[165px] 
                       bg-[#F3F3F1] border-r border-[#E6E6E4] 
                       overflow-y-auto">

      <div className="pt-[14px] pl-[24px] pr-3 space-y-[14px] pb-5">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[95px] h-auto"
        />

        {/* PRIMARY NAV */}
<nav className="space-y-[4px] text-[13px]">
  {primaryNav.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="block no-underline font-extrabold text-[#1C1C1E] hover:text-[#9A9A9A] transition-colors duration-150"
    >
      {item.label}
    </a>
  ))}
</nav>

        {/* DIVIDER */}
        <div className="border-t border-[#E6E6E4]" />

        {/* SECTIONS */}
        {sections.map((section, index) => (
          <div key={section.title} className="space-y-[8px]">

            <div className="text-[7.5px] tracking-[0.18em] text-[#9A9A9A]">
              {section.title}
            </div>

<div className="space-y-[4px] text-[9.5px]">
{section.items.map((item) => (
  <a
    key={item.label}
    href={item.href}
    className="block no-underline text-[#3A3A3A] hover:text-[#9A9A9A] transition-colors duration-150"
  >
    {item.label}
  </a>
))}
</div>

            {/* Add divider between sections except last */}
            {index !== sections.length - 1 && (
              <div className="border-t border-[#E6E6E4] mt-[14px]" />
            )}

          </div>
        ))}

      </div>
    </aside>
  );
}