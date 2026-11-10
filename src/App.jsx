import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data/cv'

const YEAR = new Date().getFullYear()

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line px-4 py-8 text-center font-mono text-sm text-gray-500">
        © {YEAR} {profile.name} · Hecho con React + Tailwind
      </footer>
    </>
  )
}
