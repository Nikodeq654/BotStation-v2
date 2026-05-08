import Link from 'next/link'

const links = [
  { href: '/uslugi', label: 'Usługi' },
  { href: '/faq', label: 'FAQ' },
  { href: '/rangi', label: 'Rangi' },
  { href: '/regulamin', label: 'Regulamin' },
  { href: '/zamowienie', label: 'Zamów bota' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#080910]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="BotStation" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold tracking-widest text-sm text-white">BOTSTATION</span>
            </div>
            <p className="text-sm text-silver2 leading-relaxed max-w-xs">
              Profesjonalne boty Discord na zamówienie. Dożywotni hosting, gwarancja i pełne wsparcie.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-accent font-mono uppercase mb-4">Nawigacja</p>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver2 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-accent font-mono uppercase mb-4">Kontakt</p>
            <a href="https://discord.gg/hE25u8P2Cw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-silver2 hover:text-white transition-colors mb-2">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.036.052a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.036-.05c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
              discord.gg/hE25u8P2Cw
            </a>
            <p className="text-sm text-silver2">
              Wsparcie:{' '}
              <a href="https://discord.com/channels/1494772280323080243/1501631817210531910" target="_blank" rel="noopener noreferrer" className="text-accent2 hover:text-white transition-colors">
                Kanał wsparcia
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-silver2/50">© 2026 BotStation - Wszelkie prawa zastrzeżone</p>
          <p className="text-xs text-silver2/30">Owner: Nikodeq</p>
        </div>
      </div>
    </footer>
  )
}
