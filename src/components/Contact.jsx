import { useState } from 'react'
import { profile } from '../data/cv'
import Icon from './Icon'
import Reveal from './Reveal'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-3 text-sm text-gray-300 transition hover:border-gray-500 hover:text-white"
    >
      <Icon name={copied ? 'check' : 'copy'} className={`h-4 w-4 ${copied ? 'text-lime' : ''}`} />
      {copied ? '¡Email copiado!' : 'Copiar email'}
    </button>
  )
}

export default function Contact() {
  const channels = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, wide: true },
    { icon: 'github', label: 'GitHub', value: `github.com/${profile.githubUser}`, href: profile.github, external: true },
    { icon: 'globe', label: 'Web', value: profile.website.replace('https://', ''), href: profile.website, external: true },
  ]

  return (
    <section id="contacto" className="relative overflow-hidden px-4 py-28 sm:px-6">
      <div className="blob top-10 left-1/2 h-96 w-96 -translate-x-1/2 bg-lime opacity-20" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-lime">
            <span className="text-gray-500">05 /</span> contacto
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            ¿Construimos algo <span className="text-gradient">juntos</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            Tengo disponibilidad inmediata. Escríbeme y te respondo lo antes posible.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 font-semibold text-ink transition hover:shadow-[0_0_50px_-5px_var(--color-lime)]"
            >
              Enviar email
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <CopyEmail />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 text-left sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 80} className={c.wide ? 'sm:col-span-2' : ''}>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-panel/80 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-lime/50"
              >
                <span className="rounded-xl border border-line bg-ink p-3 text-lime">
                  <Icon name={c.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-gray-500 uppercase">{c.label}</span>
                  <span className="block truncate text-gray-200 group-hover:text-white">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
