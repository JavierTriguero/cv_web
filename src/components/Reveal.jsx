import { useInView } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionTitle({ index, kicker, children }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 font-mono text-sm text-lime">
        <span className="text-gray-500">{index} /</span> {kicker}
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{children}</h2>
    </Reveal>
  )
}
