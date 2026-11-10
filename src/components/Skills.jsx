import { skills } from '../data/cv'
import { handleSpotlight } from '../hooks/useReveal'
import Icon from './Icon'
import Reveal, { SectionTitle } from './Reveal'

const accents = ['text-lime', 'text-cyan', 'text-violet', 'text-orange-300', 'text-pink-300']

function Marquee() {
  const all = skills.flatMap((s) => s.items)
  return (
    <div className="marquee mt-16 overflow-hidden border-y border-line py-6" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10">
        {[...all, ...all].map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-2xl font-semibold whitespace-nowrap text-gray-500 sm:text-3xl">
            {item}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="conocimientos" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle index="03" kicker="conocimientos">
          Mi <span className="text-gradient">stack</span>.
        </SectionTitle>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {skills.map((group, i) => (
            <Reveal
              key={group.area}
              delay={i * 80}
              onMouseMove={handleSpotlight}
              className={`spotlight group rounded-2xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-gray-600 ${
                i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`rounded-xl border border-line bg-ink p-2.5 ${accents[i % accents.length]}`}>
                  <Icon name={group.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-white">{group.area}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-ink/60 px-3 py-1.5 text-sm text-gray-200 transition-colors group-hover:border-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Marquee />
    </section>
  )
}
