export function Skills({ skills }) {
  return (
    <section id="skills" className="py-10 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300">Skills</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Tools I work with</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
