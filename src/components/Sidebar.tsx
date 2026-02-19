export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 min-h-screen w-[170px] 
                       bg-[#F3F3F1] border-r border-[#E6E6E4] 
                       overflow-y-auto">

      <div className="pt-[20px] pl-[28px] pr-4 space-y-[24px] pb-8">

        {/* NAME */}
        <div className="text-[13px] font-medium text-[#1D1D1F]">
          Shrey
        </div>

        {/* PRIMARY NAV */}
        <nav className="space-y-[8px] text-[12.5px] font-medium text-[#1D1D1F]">
          <a href="#about" className="block no-underline">About</a>
          <a href="#ideas" className="block no-underline">Ideas</a>
          <a href="#cv" className="block no-underline">CV</a>
        </nav>

        {/* DIVIDER */}
        <div className="border-t border-[#E6E6E4]" />

        {/* HUMAN INTERFACE */}
        <div className="space-y-[12px]">
          <div className="text-[8.5px] tracking-[0.18em] text-[#9A9A9A]">
            HUMAN INTERFACE
          </div>
          <div className="space-y-[6px] text-[11.5px] text-[#3A3A3A]">
            <div>Apple</div>
            <div>GoodNotes</div>
          </div>
        </div>

        {/* WEB INTERFACE */}
        <div className="space-y-[12px]">
          <div className="text-[8.5px] tracking-[0.18em] text-[#9A9A9A]">
            WEB INTERFACE
          </div>
          <div className="space-y-[6px] text-[11.5px] text-[#3A3A3A]">
            <div>Berkeleytime</div>
            <div>Marqeta</div>
            <div>PropertyGuru</div>
            <div>Micro-Interactions</div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#E6E6E4]" />

        {/* CONTACT */}
        <div className="space-y-[12px]">
          <div className="text-[8.5px] tracking-[0.18em] text-[#9A9A9A]">
            CONTACT
          </div>
          <div className="space-y-[6px] text-[11.5px] text-[#3A3A3A]">
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
