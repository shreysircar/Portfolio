export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 min-h-screen w-[165px] 
                       bg-[#F3F3F1] border-r border-[#E6E6E4] 
                       overflow-y-auto">

      <div className="pt-[14px] pl-[24px] pr-3 space-y-[14px] pb-5">

        {/* NAME */}
        <div className="text-[12px] font-medium text-[#1C1C1E]">
          Shrey
        </div>

        {/* PRIMARY NAV (EXTRA BOLD) */}
<nav className="space-y-[4px] text-[13px] text-[#1C1C1E]">
  <a href="#about" className="block no-underline font-semibold">About</a>
  <a href="#ideas" className="block no-underline font-semibold">Ideas</a>
  <a href="#cv" className="block no-underline font-semibold">CV</a>
</nav>


        {/* DIVIDER */}
        <div className="border-t border-[#E6E6E4]" />

        {/* HUMAN INTERFACE */}
        <div className="space-y-[8px]">
          <div className="text-[7.5px] tracking-[0.18em] text-[#9A9A9A]">
            HUMAN INTERFACE
          </div>
          <div className="space-y-[4px] text-[9.5px] text-[#3A3A3A]">
            <div>Apple</div>
            <div>GoodNotes</div>
          </div>
        </div>

        {/* WEB INTERFACE */}
        <div className="space-y-[8px]">
          <div className="text-[7.5px] tracking-[0.18em] text-[#9A9A9A]">
            WEB INTERFACE
          </div>
          <div className="space-y-[4px] text-[9.5px] text-[#3A3A3A]">
            <div>Berkeleytime</div>
            <div>Marqeta</div>
            <div>PropertyGuru</div>
            <div>Micro-Interactions</div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#E6E6E4]" />

        {/* CONTACT */}
        <div className="space-y-[8px]">
          <div className="text-[7.5px] tracking-[0.18em] text-[#9A9A9A]">
            CONTACT
          </div>
          <div className="space-y-[4px] text-[9.5px] text-[#3A3A3A]">
            <div>Mail</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>Read.cv</div>
          </div>
        </div>

      </div>
    </aside>
  )
}
