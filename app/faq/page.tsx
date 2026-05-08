'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    { q: 'Jak zamówić bota?', a: 'Bota zamawiasz przez formularz na tej stronie - zakładka "Zamów bota" w menu. Wypełnij formularz, a odezwiemy się przez Discord lub email. W sprawie błędów lub pomocy technicznej wejdź na kanał wsparcia i utwórz ticket.' },
    { q: 'Jakie są metody płatności?', a: 'Obsługujemy BLIK (Przelew na telefon), PayPal oraz Przelew tradycyjny. Standardowo płacisz dopiero po oddaniu gotowego projektu. Przy większych zleceniach wymagana jest zaliczka 50%.' },
    { q: 'Ile trwa realizacja?', a: 'Czas zależy od skomplikowania projektu. Proste systemy dostarczamy zazwyczaj w 24-48 godzin. Przy większych zleceniach czas realizacji ustalamy indywidualnie po przesłaniu formularza.' },
    { q: 'Czy hosting jest płatny?', a: 'Nie. Każdy zakupiony u nas bot otrzymuje darmowy hosting 24/7 na czas nieokreślony. Nie ma żadnych dodatkowych opłat miesięcznych ani abonamentowych. Płacisz raz za stworzenie bota - hosting jest w cenie na zawsze.' },
    { q: 'Co z gwarancją na błędy?', a: 'Wszystkie projekty objęte są dożywotnią gwarancją. Jeśli w kodzie pojawi się błąd wynikający z naszej pracy, naprawiamy go całkowicie za darmo, bez limitu czasowego.' },
    { q: 'Czy mogę edytować bota po zakupie?', a: 'Tak. Przez pierwsze 7 dni od oddania projektu wszelkie zmiany niewynikające z błędów są darmowe. Po tym terminie każda edycja logiki lub nowe moduły są wyceniane osobno.' },
    { q: 'Co się stanie jeśli mój serwer stanie się nieaktywny?', a: 'Jeśli Twój serwer będzie nieaktywny przez ponad 30 dni, podejmiemy próbę kontaktu z 7-dniowym wyprzedzeniem. Reaktywacja jest zawsze możliwa i bezpłatna - wystarczy się odezwać.' },
    { q: 'Czy mogę otrzymać kod źródłowy bota?', a: 'Tak, choć domyślnie kod pozostaje własnością wykonawcy na czas trwania hostingu. Przekazanie kodu jest możliwe - warunki ustalamy indywidualnie. W przypadku wyłączenia hostingu kod zawsze wysyłamy na email klienta.' },
    { q: 'Jak dołączyć do zespołu BotStation?', a: 'Rekrutacja na stanowiska pomocnicze i developerskie ogłaszana jest na kanale ogłoszenia na serwerze Discord. Możesz też wysłać portfolio bezpośrednio do Ownera (Nikodeq).' },
  ]

  return (
    <>
      <PageHeader
        label="Pytania i odpowiedzi"
        title="FAQ"
        description="Znajdziesz tu odpowiedzi na najczęstsze pytania naszych klientów. Jeśli czegoś brakuje - utwórz ticket na kanale wsparcia."
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-bg2 border rounded-2xl overflow-hidden transition-all duration-200 ${open === i ? 'border-accent/25' : 'border-white/[0.07] hover:border-white/[0.12]'}`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent/50 w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-semibold text-sm sm:text-base transition-colors ${open === i ? 'text-accent2' : 'text-white'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <Plus
                    size={16}
                    className={`flex-shrink-0 text-accent transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                  />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-64' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 text-sm text-silver2 leading-relaxed pl-14">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Still questions */}
          <div className="mt-8 bg-bg2 border border-white/[0.07] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-white mb-1">Masz inne pytanie?</h3>
              <p className="text-sm text-silver2">Wejdź na kanał wsparcia, utwórz ticket i odpiszemy szybko.</p>
            </div>
            <a
              href="https://discord.com/channels/1494772280323080243/1501631817210531910"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 bg-accent hover:bg-accent2 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent/20"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.036.052a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.036-.05c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
              Napisz na Discord
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
