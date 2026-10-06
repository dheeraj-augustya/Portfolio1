export function Certifications({ certifications, declaration }) {
  return (
    <section id="certifications" className="py-10 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-300">Certifications</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Professional certifications</h2>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
        <ul className="space-y-3 text-slate-200">
          {certifications.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
        <p className="text-slate-200">{declaration}</p>
        <p className="mt-6 text-lg font-semibold text-white">Signature: Dheeraj Soni</p>
      </div>
    </section>
  )
}
