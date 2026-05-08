import Link from 'next/link'

const stats = [
  { num: '24/7', label: 'Hosting' },
  { num: '∞', label: 'Gwarancja' },
  { num: '0 zł', label: 'Wycena' },
  { num: '7 dni', label: 'Poprawki' },
]

const previews = [
  { href: '/uslugi', icon: '🤖', title: 'Usługi', desc: 'Autorskie boty na zamówienie, hosting, gwarancja, metody płatności. Wszystko co musisz wiedzieć przed zamówieniem.', cta: 'Sprawdź ofertę' },
  { href: '/faq', icon: '❓', title: 'FAQ', desc: 'Jak zamówić? Ile trwa realizacja? Czy hosting jest płatny? Odpowiedzi na wszystkie pytania klientów.', cta: 'Przejdź do FAQ' },
  { href: '/rangi', icon: '👑', title: 'Rangi serwera', desc: 'Poznaj strukturę BotStation - od użytkownika przez klienta aż do Ownera.', cta: 'Zobacz strukturę' },
  { href: '/regulamin', icon: '📜', title: 'Regulamin', desc: 'Zasady zamówień, płatności, hosting, gwarancja. Przejrzysty regulamin bez ukrytych zapisów.', cta: 'Przeczytaj regulamin' },
  { href: '/zamowienie', icon: '🚀', title: 'Zamów bota', desc: 'Wypełnij formularz - wycena jest darmowa i niezobowiązująca. Odpiszemy przez Discord lub email.', cta: 'Zamów teraz' },
  { href: 'https://discord.gg/hE25u8P2Cw', icon: '💬', title: 'Serwer Discord', desc: 'Dołącz do naszego serwera, przeglądaj realizacje, pisz na kanałach wsparcia.', cta: 'Dołącz', external: true },
]

const trust = [
  'Dożywotni hosting 24/7',
  'Dożywotnia gwarancja błędów',
  '7 dni darmowych poprawek',
  'Darmowa wycena',
  'Autorski kod, zero gotowców',
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden">
        {/* BG effects */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/[0.12] via-transparent to-transparent" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(91,127,255,0.12) 0%, transparent 70%)' }} />
        <div className="grid-bg" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            <span className="font-mono text-xs font-bold tracking-widest text-accent2 uppercase">Profesjonalne boty Discord na zamówienie</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
            <span className="bg-gradient-to-br from-silver via-white to-accent2 bg-clip-text text-transparent">BotStation</span>
            <br />
            <span className="text-white">Twój bot,</span>
            <br />
            <span className="text-white">Twoje zasady.</span>
          </h1>

          <p className="text-silver2 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            Tworzymy autorskie systemy botów Discord dopasowane do Twoich potrzeb. Dożywotni hosting, darmowe naprawy błędów, pełne wsparcie techniczne.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <Link
              href="/zamowienie"
              className="flex items-center gap-2 bg-accent hover:bg-accent2 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Zamów bota
            </Link>
            <a
              href="https://discord.gg/hE25u8P2Cw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent hover:bg-white/5 text-silver border border-white/10 hover:border-white/20 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.036.052a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.036-.05c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
              Dołącz do serwera
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-bold text-white">{s.num}</div>
                <div className="text-xs text-silver2 mt-1 font-mono tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* PREVIEW CARDS */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-accent">Przeglądaj serwis</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-3">Co znajdziesz na BotStation?</h2>
            <p className="text-silver2 max-w-lg">Każda sekcja to oddzielna strona z pełnymi informacjami. Kliknij, żeby dowiedzieć się więcej.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {previews.map((p, i) => (
              p.external ? (
                <a
                  key={i}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-bg2 border border-white/[0.07] hover:border-accent/25 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1"
                >
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="font-display font-bold text-white text-lg">{p.title}</h3>
                  <p className="text-sm text-silver2 leading-relaxed flex-1">{p.desc}</p>
                  <span className="text-sm font-semibold text-accent2 group-hover:gap-2 flex items-center gap-1 transition-all">{p.cta} →</span>
                </a>
              ) : (
                <Link
                  key={i}
                  href={p.href}
                  className="group bg-bg2 border border-white/[0.07] hover:border-accent/25 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="font-display font-bold text-white text-lg">{p.title}</h3>
                  <p className="text-sm text-silver2 leading-relaxed flex-1">{p.desc}</p>
                  <span className="text-sm font-semibold text-accent2 flex items-center gap-1 group-hover:gap-2 transition-all">{p.cta} →</span>
                </Link>
              )
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-8 bg-bg2 border border-white/[0.07] rounded-2xl p-5 flex flex-wrap gap-4 justify-center">
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-silver font-medium">
                <span className="text-accent">✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* CTA BANNER */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-bg2 border border-accent/20 rounded-3xl p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-accent/[0.08] to-transparent" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,127,255,0.08) 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">Gotowy na swojego bota?</h2>
              <p className="text-silver2 mb-8 text-lg">Wycena jest bezpłatna i niezobowiązująca.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/zamowienie" className="bg-accent hover:bg-accent2 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-accent/25 hover:-translate-y-0.5">
                  Wypełnij formularz zamówienia
                </Link>
                <a href="https://discord.gg/hE25u8P2Cw" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-silver px-8 py-3.5 rounded-xl font-semibold transition-all duration-200">
                  Napisz na Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
