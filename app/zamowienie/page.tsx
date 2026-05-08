'use client'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

const WEBHOOK = 'https://discord.com/api/webhooks/1501503526742786088/5Zv9QUAP-Nr3olMoKh3-nZ0mg5EvqV0MfHk3CHf9EKsOrJ56aaQAbccCGM_hkl4WQ5O5'
const CONFIRM_URL = 'https://botstation-weryfikacja.vercel.app/api/send-confirmation'

export default function ZamowieniePage() {
  const [form, setForm] = useState({ kontakt: '', serwer: '', nazwa: '', funkcje: '', baza: '', budzet: '', termin: '', uwagi: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const submit = async () => {
    const { kontakt, serwer, nazwa, funkcje, baza, budzet, termin } = form
    if (!kontakt || !serwer || !nazwa || !funkcje || !baza || !budzet || !termin) {
      setError('Wypełnij wszystkie wymagane pola!')
      return
    }
    setError('')
    setLoading(true)

    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: '📬 Nowe zamówienie bota!',
            color: 0x5b7fff,
            fields: [
              { name: '👤 Kontakt', value: kontakt, inline: true },
              { name: '🔗 Serwer', value: serwer, inline: true },
              { name: '🤖 Bot', value: nazwa, inline: false },
              { name: '⚙️ Funkcje', value: funkcje, inline: false },
              { name: '🗄️ Baza/Panel', value: baza, inline: true },
              { name: '💰 Budżet', value: budzet, inline: true },
              { name: '⏰ Termin', value: termin, inline: true },
              { name: '📝 Uwagi', value: form.uwagi || 'Brak', inline: false },
            ],
            footer: { text: 'BotStation - Formularz zamówienia' },
            timestamp: new Date().toISOString()
          }]
        })
      })

      if (!res.ok) throw new Error()

      await fetch(CONFIRM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kontakt, nazwa, serwer, budzet, termin })
      }).catch(() => {})

      setSuccess(true)
    } catch {
      setError('Coś poszło nie tak. Spróbuj ponownie lub skontaktuj się przez Discord.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="font-display text-3xl font-bold text-white mb-3">Zgłoszenie wysłane!</h2>
          <p className="text-silver2 leading-relaxed">Odezwiemy się wkrótce przez Discord lub email. Zazwyczaj odpowiadamy w ciągu kilku godzin.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        label="Formularz zamówienia"
        title="Zamów swojego bota"
        description="Wycena jest darmowa i niezobowiązująca. Opisz czego potrzebujesz - odpiszemy przez Discord lub email."
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
            {/* Form */}
            <div className="bg-bg2 border border-white/[0.07] rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Kontakt */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Nick Discord lub adres e-mail <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.kontakt}
                    onChange={e => set('kontakt', e.target.value)}
                    placeholder="np. nikodeq lub email@example.com"
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white placeholder-silver2/50 outline-none transition-colors"
                  />
                  <p className="text-xs text-silver2/60 mt-1.5">Podaj nick z tagiem (#0000) lub adres email</p>
                </div>

                {/* Serwer */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Link do serwera Discord <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.serwer}
                    onChange={e => set('serwer', e.target.value)}
                    placeholder="np. https://discord.gg/twojlink"
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white placeholder-silver2/50 outline-none transition-colors"
                  />
                </div>

                {/* Nazwa */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Nazwa i przeznaczenie bota <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.nazwa}
                    onChange={e => set('nazwa', e.target.value)}
                    placeholder="np. Bot moderacyjny dla serwera gamingowego"
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white placeholder-silver2/50 outline-none transition-colors"
                  />
                </div>

                {/* Funkcje */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Kluczowe funkcje bota <span className="text-accent">*</span>
                  </label>
                  <textarea
                    value={form.funkcje}
                    onChange={e => set('funkcje', e.target.value)}
                    placeholder="Opisz dokładnie co bot ma robić - im więcej szczegółów, tym dokładniejsza wycena..."
                    rows={4}
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white placeholder-silver2/50 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Baza */}
                <div>
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Baza danych lub panel WWW? <span className="text-accent">*</span>
                  </label>
                  <select
                    value={form.baza}
                    onChange={e => set('baza', e.target.value)}
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Wybierz...</option>
                    <option value="Tak">Tak</option>
                    <option value="Nie">Nie</option>
                    <option value="Nie wiem">Nie wiem</option>
                  </select>
                </div>

                {/* Budzet */}
                <div>
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Przybliżony budżet <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.budzet}
                    onChange={e => set('budzet', e.target.value)}
                    placeholder="np. 50-100 zł"
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white placeholder-silver2/50 outline-none transition-colors"
                  />
                </div>

                {/* Termin */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Termin realizacji <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.termin}
                    onChange={e => set('termin', e.target.value)}
                    placeholder="np. Za 2 tygodnie, do końca miesiąca..."
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white placeholder-silver2/50 outline-none transition-colors"
                  />
                </div>

                {/* Uwagi */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-silver tracking-wide uppercase font-mono mb-2">
                    Dodatkowe uwagi
                  </label>
                  <textarea
                    value={form.uwagi}
                    onChange={e => set('uwagi', e.target.value)}
                    placeholder="Coś czego nie było gdzie wpisać..."
                    rows={3}
                    className="w-full bg-bg3 border border-white/[0.07] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-white placeholder-silver2/50 outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
                  ⚠️ {error}
                </div>
              )}

              <button
                onClick={submit}
                disabled={loading}
                className="mt-5 w-full bg-accent hover:bg-accent2 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold text-base transition-all duration-200 shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-accent/40"
              >
                {loading ? 'Wysyłanie...' : 'Wyślij zgłoszenie →'}
              </button>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              <div className="bg-bg2 border border-white/[0.07] rounded-2xl p-5">
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-accent2 mb-4">Co dostajesz</h4>
                {[
                  'Autorski bot pisany od zera',
                  'Dożywotni hosting 24/7',
                  'Dożywotnia gwarancja błędów',
                  '7 dni darmowych poprawek',
                  'Pełne wsparcie techniczne',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                    <span className="text-accent text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-silver2">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-bg2 border border-white/[0.07] rounded-2xl p-5">
                <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-accent2 mb-4">Płatności</h4>
                {[
                  { icon: '💸', label: 'BLIK / Przelew na telefon' },
                  { icon: '💳', label: 'PayPal' },
                  { icon: '🏦', label: 'Przelew tradycyjny' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
                    <span>{p.icon}</span>
                    <span className="text-sm text-silver2">{p.label}</span>
                  </div>
                ))}
                <p className="text-xs text-silver2/50 mt-3 leading-relaxed">Standardowo płacisz po oddaniu gotowego projektu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
