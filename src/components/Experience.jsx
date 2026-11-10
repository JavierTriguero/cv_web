import { experience } from '../data/cv'
import { handleSpotlight } from '../hooks/useReveal'
import Reveal, { SectionTitle } from './Reveal'

export default function Experience() {
  return (
    <section id="experiencia" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <SectionTitle index="02" kicker="experiencia laboral">
        Más de 6 años <span className="text-gradient">construyendo</span>.
      </SectionTitle>

      <ol className="relative space-y-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-lime before:via-cyan before:to-violet md:before:left-[calc(12rem+7px)]">
        {experience.map((job, i) => (
          <li key={job.company} className="relative grid gap-4 pl-10 md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0">
            {/* Punto de la línea temporal */}
            <span className="absolute top-2 left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-lime bg-ink md:left-48">
              {i === 0 && <span className="absolute h-full w-full animate-ping rounded-full bg-lime/60" />}
            </span>

            <Reveal className="md:pt-0.5 md:pr-4 md:text-right">
              <p className="font-mono text-sm text-lime">{job.period}</p>
              <p className="mt-1 text-2xl font-bold text-white">{job.company}</p>
              {job.client && <p className="text-sm text-gray-400">Cliente: {job.client}</p>}
            </Reveal>

            <Reveal
              delay={100}
              onMouseMove={handleSpotlight}
              className="spotlight rounded-2xl border border-line bg-panel/80 p-6 transition-colors hover:border-gray-600 sm:p-8 md:ml-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <span className="rounded-full bg-lime/10 px-3 py-1 text-xs font-medium text-lime">{job.highlight}</span>
              </div>

              <ul className="mt-5 space-y-3 text-gray-300">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
                {job.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-xs text-gray-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
