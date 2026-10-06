export function Education({ education }) {
  return (
    <section id="education" className="py-10 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300">Education</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Academic background</h2>
      </div>

      <div className="space-y-5">
        {education.map((item) => (
          <div key={item.degree} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                <p className="text-cyan-300">{item.institution}</p>
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {item.period}
              </span>
            </div>
            {item.result ? <p className="mt-4 text-slate-300">Result: {item.result}</p> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
