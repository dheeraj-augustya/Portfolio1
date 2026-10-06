export function About({ summary }) {
  return (
    <section id="about" className="py-10 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300">Professional Summary</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Driven by problem solving and strong fundamentals.
        </h2>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
        <p className="text-lg leading-8 text-slate-300">{summary}</p>
      </div>
    </section>
  )
}
