import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import {
  profile,
  summary,
  experience,
  projects,
  skills,
  education,
  certifications,
  declaration,
} from './data/portfolioData'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <NavBar />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pt-16">
        <Hero profile={profile} />
        <About summary={summary} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Certifications certifications={certifications} declaration={declaration} />
        <Contact profile={profile} />
      </main>

      <Footer />
    </div>
  )
}

export default App
