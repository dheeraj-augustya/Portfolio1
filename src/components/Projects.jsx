export function Projects({ projects }) {
  return (
    <section id="projects" className="py-10 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300">Projects</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Selected work</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-cyan-500/40"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{project.category}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
