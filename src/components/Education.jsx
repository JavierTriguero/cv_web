import { education, extras } from '../data/cv'
import { handleSpotlight } from '../hooks/useReveal'
import Icon from './Icon'
import Reveal, { SectionTitle } from './Reveal'

export default function Education() {
  return (
    <section id="formacion" className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <SectionTitle index="04" kicker="formación">
        Aprendiendo <span className="text-gradient">siempre</span>.
      </SectionTitle>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal
            key={e.title}
            delay={i * 80}
            onMouseMove={handleSpotlight}
            className="spotlight flex flex-col rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-gray-600"
          >
            <div className="flex items-center justify-between">
              <Icon name={e.kind === 'Curso' ? 'badge' : 'cap'} className={`h-7 w-7 ${e.kind === 'Curso' ? 'text-cyan' : 'text-lime'}`} />
              <span className="font-mono text-xs text-gray-500 uppercase">{e.kind}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{e.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{e.place}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="mb-6 font-mono text-sm text-lime">
          <span className="text-gray-500">//</span> idiomas y otros
        </h3>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {extras.map((x) => (
            <div key={x.label} className="bg-panel p-6">
              <dt className="text-sm text-gray-400">{x.label}</dt>
              <dd className="mt-1 text-xl font-semibold text-white">{x.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
