import { useEffect, useState } from 'react'
import { profile } from '../data/cv'
import Icon from './Icon'

function useTypewriter(words, { typing = 70, deleting = 35, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timeout
    if (!erasing && text === word) {
      timeout = setTimeout(() => setErasing(true), pause)
    } else if (erasing && text === '') {
      timeout = setTimeout(() => {
        setErasing(false)
        setIndex((i) => i + 1)
      }, 250)
    } else {
      timeout = setTimeout(
        () => setText(erasing ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        erasing ? deleting : typing,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, erasing, index, words, typing, deleting, pause])

  return text
}

function Avatar() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72">
      {/* Anillo de gradiente giratorio */}
      <div className="absolute -inset-1 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--color-lime),var(--color-cyan),var(--color-violet),var(--color-lime))] opacity-80 blur-[2px]" />
      <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-ink bg-panel">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center font-mono text-6xl font-bold sm:text-7xl">
            <span className="text-gradient">JT</span>
          </div>
        ) : (
          <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {profile.available && (
        <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-panel/90 px-4 py-2 text-sm text-gray-200 shadow-xl backdrop-blur">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
          </span>
          Disponibilidad inmediata
        </div>
      )}
    </div>
  )
}

function CodeCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-line bg-panel/80 font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-gray-500">Developer.java</span>
      </div>
      <pre className="overflow-x-auto p-4 text-gray-300">
        <code>
          <span className="text-yellow-300">@Service</span>
          {'\n'}
          <span className="text-violet">public class</span> <span className="text-cyan">Javier</span> {'{\n'}
          {'  '}
          <span className="text-violet">String</span> stack = <span className="text-lime">"Java · Spring · React"</span>;{'\n'}
          {'  '}
          <span className="text-violet">int</span> years = <span className="text-orange-300">6</span>;{'\n'}
          {'  '}
          <span className="text-violet">String</span> base = <span className="text-lime">"Elche"</span>;{'\n'}
          {'  '}
          <span className="text-violet">boolean</span> openToWork = <span className="text-orange-300">true</span>;{'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      <div className="bg-grid absolute inset-0" />
      <div className="blob -top-32 -left-32 h-96 w-96 bg-lime" />
      <div className="blob top-1/3 -right-40 h-[28rem] w-[28rem] bg-cyan [animation-delay:-6s]" />
      <div className="blob -bottom-40 left-1/3 h-80 w-80 bg-violet [animation-delay:-12s]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs text-gray-400 backdrop-blur sm:text-sm">
            <Icon name="pin" className="h-4 w-4 text-lime" />
            {profile.location}
          </p>

          <h1 className="text-5xl leading-[1.02] font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            {profile.firstName}
            <br />
            <span className="text-gradient">{profile.lastName}</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300 sm:text-2xl">{profile.title}</p>
          <p className="caret mt-2 h-8 font-mono text-lg text-lime sm:text-xl" aria-label={profile.roles.join(', ')}>
            {role}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:shadow-[0_0_40px_-5px_var(--color-lime)]"
            >
              Hablemos
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-gray-500"
            >
              Ver experiencia
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-full border border-line bg-panel/60 p-3 text-white backdrop-blur transition hover:border-gray-500"
            >
              <Icon name="github" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <Avatar />
          <div className="hidden sm:block">
            <CodeCard />
          </div>
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Bajar a Sobre mí"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-gray-500 hover:text-white lg:block"
      >
        <Icon name="down" className="h-6 w-6" />
      </a>
    </section>
  )
}
