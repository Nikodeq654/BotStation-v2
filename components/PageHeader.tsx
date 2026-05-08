interface PageHeaderProps {
  label: string
  title: string
  description: string
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.08] via-transparent to-transparent" />
      <div className="grid-bg" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase text-accent mb-4">
          {label}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-br from-silver via-white to-accent2 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-silver2 text-base sm:text-lg leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
