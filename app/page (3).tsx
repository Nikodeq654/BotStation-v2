import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rangi - BotStation',
  description: 'Poznaj strukturę serwera BotStation - hierarchia rang od użytkownika do Ownera.',
}

const roles = [
  { emoji: '👤', name: 'UŻYTKOWNIK', title: 'Zweryfikowany członek społeczności', desc: 'Podstawowa ranga przyznawana każdemu po przejściu weryfikacji. Daje dostęp do kanałów ogólnych i możliwość przeglądania oferty.' },
  { emoji: '⏳', name: 'W TRAKCIE PRAC', title: 'Projekt w fazie realizacji', desc: 'Oznaczenie dla klientów, których projekt jest aktualnie kodowany lub testowany przez nasz zespół techniczny.' },
  { emoji: '💎', name: 'KLIENT', title: 'Zakupiony system - aktywny klient', desc: 'Ranga przyznawana osobom, które zakupiły system u nas. Daje priorytet w obsłudze i dostęp do kanałów klientów.' },
  { emoji: '🤝', name: 'PARTNER', title: 'Współpraca i partnerstwo', desc: 'Osoby i projekty współpracujące z BotStation na specjalnych warunkach. Partnerzy mają dedykowane kanały i wzajemne promocje.' },
  { emoji: '🛠️', name: 'TECHNIK', title: 'Zespół developerów', desc: 'Zespół odpowiedzialny za pisanie kodu, naprawę błędów i wdrażanie systemów. Rekrutacja odbywa się przez ogłoszenia na serwerze.' },
  { emoji: '👑', name: 'OWNER - Nikodeq', title: 'Założyciel i właściciel BotStation', desc: 'Zarządza całym projektem, podejmuje finalne decyzje w sprawie zleceń, rekrutacji i kierunku rozwoju serwisu.', top: true },
]

export default function RangiPage() {
  return (
    <>
      <PageHeader
        label="Hierarchia serwera"
        title="Rangi BotStation"
        description="Każda ranga ma swoje miejsce i znaczenie. Oto jak wygląda struktura naszego serwera Discord."
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-accent">Struktura od podstaw</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white mt-2 mb-2">Kto jest kim na serwerze?</h2>
            <p className="text-silver2 text-sm">Rangi są przyznawane automatycznie lub przez administrację. Lista od najniższej do najwyższej.</p>
          </div>

          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-7 top-10 bottom-10 w-px bg-gradient-to-b from-accent/60 to-accent/5" />

            {roles.map((r, i) => (
              <div key={i} className="relative flex items-start gap-5 py-4 group">
                <div className={`relative z-10 w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-2xl border transition-all duration-200 group-hover:scale-105 ${r.top ? 'bg-accent/10 border-accent/30' : 'bg-bg2 border-white/[0.07] group-hover:border-accent/20'}`}>
                  {r.emoji}
                </div>
                <div className="flex-1 pt-1">
                  <div className={`font-mono text-xs font-bold tracking-widest uppercase mb-0.5 ${r.top ? 'text-yellow-400' : 'text-accent2'}`}>
                    {r.name}
                  </div>
                  <div className="font-semibold text-white text-sm mb-1">{r.title}</div>
                  <div className="text-xs text-silver2 leading-relaxed">{r.desc}</div>
                </div>
                {i < roles.length - 1 && (
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-white/[0.04]" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-bg2 border border-white/[0.07] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-white mb-1">Chcesz dołączyć do zespołu?</h3>
              <p className="text-sm text-silver2">Ogłoszenia rekrutacyjne pojawiają się na kanale ogłoszenia. Możesz też wysłać portfolio do Ownera.</p>
            </div>
            <a
              href="https://discord.gg/hE25u8P2Cw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-accent hover:bg-accent2 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent/20"
            >
              Dołącz do serwera
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
