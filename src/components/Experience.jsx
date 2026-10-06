export function Experience({ experience }) {
  return (
    <section id="experience" className="py-10 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300">Experience</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Career path</h2>
      </div>

      <div className="space-y-5">
        {experience.map((item) => (
          <div key={item.role} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-cyan-300">{item.company}</p>
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {item.period}
              </span>
            </div>
            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
