export function Hero({ profile }) {
  return (
    <section id="home" className="grid items-center gap-10 pb-14 md:grid-cols-2 md:pb-20">
      <div className="space-y-8">
        <div className="space-y-5">
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-lg font-medium text-cyan-300">{profile.role}</p>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            {profile.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
          >
            Email Me
          </a>
          <a
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
          >
            LinkedIn
          </a>
        </div>

        <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
          <p>Phone: {profile.phone}</p>
          <p>Email: {profile.email}</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl" />
        <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-2xl shadow-cyan-900/10">
          <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-bold text-white">
                  DS
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{profile.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{profile.role}</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                Fresher
              </span>
            </div>
          </div>

          <div className="space-y-4 p-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Primary Skills</p>
              <p className="mt-3 text-xl font-semibold text-cyan-300">C#, ASP.NET, SQL Server</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <p className="mt-3 text-xl font-semibold text-white">Responsive web apps & problem solving</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Languages</p>
                <p className="mt-3 text-lg font-semibold text-white">C#, Java, JavaScript</p>
              </div>
              <div className="rounded-2xl bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Specialty</p>
                <p className="mt-3 text-lg font-semibold text-white">DSA & debugging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
