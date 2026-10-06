import { navLinks } from '../data/portfolioData'

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
            DS
          </div>
          <div>
            <p className="text-base font-semibold tracking-wide">Dheeraj Soni</p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Developer</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}
