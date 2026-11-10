import { useEffect, useState } from 'react'
import { profile, stats } from '../data/cv'
import { useInView, handleSpotlight } from '../hooks/useReveal'
import Reveal, { SectionTitle } from './Reveal'

function Counter({ value, suffix }) {
  const [ref, visible] = useInView(0.6)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!visible) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    const duration = reduce ? 0 : 1200
    let frame
    const tick = (now) => {
      const t = duration ? Math.min((now - start) / duration, 1) : 1
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, value])

  return (
    <span ref={ref} className="text-gradient tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="sobre-mi" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <SectionTitle index="01" kicker="sobre mí">
        Código que llega a <span className="text-gradient">producción</span>.
      </SectionTitle>

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            Soy <strong className="text-white">desarrollador Full Stack</strong> con más de 6 años de experiencia en{' '}
            <strong className="text-white">Java/Spring</strong> y <strong className="text-white">React</strong>, en
            proyectos para clientes como <strong className="text-lime">Iberdrola</strong> y{' '}
            <strong className="text-lime">Zurich</strong>.
          </p>
          <p>
            He diseñado arquitecturas desde cero, coordinado equipos de desarrollo y modernizado aplicaciones heredadas.
          </p>
          <p>
            Trabajo a diario con IA (<span className="text-cyan">GitHub Copilot</span>,{' '}
            <span className="text-cyan">Claude Code</span>) y la integro en aplicaciones mediante LLMs.
          </p>
          <p className="sr-only">{profile.about}</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              onMouseMove={handleSpotlight}
              className="spotlight rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-gray-600"
            >
              <div className="text-4xl font-bold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-gray-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
