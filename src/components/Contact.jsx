export function Contact({ profile }) {
  return (
    <section id="contact" className="py-10 md:py-16">
      <div className="rounded-[2rem] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 md:p-10">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Let&apos;s connect.</h2>
          </div>

          <div className="grid gap-4 text-slate-200 md:grid-cols-2">
            <div>
              <p className="text-cyan-300">Location</p>
              <p>{profile.location}</p>
            </div>
            <div>
              <p className="text-cyan-300">Phone</p>
              <p>{profile.phone}</p>
            </div>
            <div>
              <p className="text-cyan-300">Email</p>
              <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-cyan-300">LinkedIn</p>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {profile.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
