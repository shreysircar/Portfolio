export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[180px] 
                       bg-[#F3F3F1] border-r border-[#E6E6E4]">

      <div className="pt-[36px] pl-[44px] pr-6">

        {/* NAME */}
        <div className="text-[15px] font-medium text-[#1D1D1F]">
          Shrey
        </div>

        {/* PRIMARY NAV */}
        <div className="mt-[24px] space-y-[14px] text-[13.5px] text-[#1D1D1F]">
          <a href="#about" className="block no-underline">About</a>
          <a href="#ideas" className="block no-underline">Ideas</a>
          <a href="#cv" className="block no-underline">CV</a>
        </div>

        {/* DIVIDER */}
        <div className="mt-[32px] mb-[32px] border-t border-[#E6E6E4]" />

        {/* HUMAN INTERFACE */}
        <div className="space-y-[18px]">
          <div className="text-[9.5px] tracking-[0.16em] text-[#9A9A9A]">
            HUMAN INTERFACE
          </div>
          <div className="space-y-[10px] text-[12.5px] text-[#3A3A3A]">
            <div>Apple</div>
            <div>GoodNotes</div>
          </div>
        </div>

        {/* WEB INTERFACE */}
        <div className="mt-[40px] space-y-[18px]">
          <div className="text-[9.5px] tracking-[0.16em] text-[#9A9A9A]">
            WEB INTERFACE
          </div>
          <div className="space-y-[10px] text-[12.5px] text-[#3A3A3A]">
            <div>Berkeleytime</div>
            <div>Marqeta</div>
            <div>PropertyGuru</div>
            <div>Micro-Interactions</div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-[40px] mb-[32px] border-t border-[#E6E6E4]" />

        {/* CONTACT */}
        <div className="space-y-[18px]">
          <div className="text-[9.5px] tracking-[0.16em] text-[#9A9A9A]">
            CONTACT
          </div>
          <div className="space-y-[10px] text-[12.5px] text-[#3A3A3A]">
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
