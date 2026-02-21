export default function Home() {
  return (
    <main className="w-full max-w-[820px] px-12 py-24">

      <section id="about" className="mb-20">
        <h2 className="text-xs tracking-widest text-neutral-500 mb-6">
          ABOUT
        </h2>
        <p className="leading-relaxed mb-4">
          I design and build structured digital systems with clarity,
          performance, and scale in mind.
        </p>
        <p className="leading-relaxed">
          Currently focused on full-stack web platforms and AI-driven systems.
        </p>
      </section>

      <section id="work" className="mb-20">
        <h2 className="text-xs tracking-widest text-neutral-500 mb-10">
          WORK
        </h2>

        <div className="mb-10">
          <h3 className="text-base font-medium">Consulting Platform</h3>
          <p className="text-sm text-neutral-600 mt-1">
            Structured evaluation platform for consultants.
          </p>
          <p className="text-sm text-neutral-400 mt-2">
            React · Node · PostgreSQL
          </p>
        </div>

      </section>

    </main>
  )
}