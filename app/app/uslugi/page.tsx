import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usługi - BotStation',
  description: 'Autorskie boty Discord na zamówienie. Dożywotni hosting 24/7, gwarancja, 7 dni poprawek. Darmowa wycena.',
}

const features = [
  { icon: '🤖', title: 'Autorskie boty na zamówienie', desc: 'Każdy bot tworzony jest indywidualnie według Twojej specyfikacji. Żadnych gotowców - tylko unikalne rozwiązania napisane od zera.' },
  { icon: '🌐', title: 'Dożywotni hosting 24/7', desc: 'Bot działa nieprzerwanie na naszych serwerach bez żadnych dodatkowych opłat miesięcznych. Płacisz raz - działa bez końca.' },
  { icon: '🛡️', title: 'Dożywotnia gwarancja błędów', desc: 'Wszystkie błędy wynikające z naszego kodu naprawiamy za darmo, bez limitów czasowych i bez dodatkowych kosztów. Na zawsze.' },
  { icon: '💬', title: 'Pełne wsparcie techniczne', desc: 'Nasz zespół jest dostępny przez Discord. Pomożemy z konfiguracją, odpowiemy na pytania, rozwiążemy problemy.' },
  { icon: '💰', title: 'Darmowa wycena', desc: 'Analiza techniczna Twojego zlecenia jest całkowicie bezpłatna i niezobowiązująca. Zapytaj bez ryzyka - wycena do niczego nie zobowiązuje.' },
  { icon: '✏️', title: '7 dni darmowych poprawek', desc: 'Po oddaniu projektu masz 7 dni na bezpłatne zmiany i modyfikacje. Żeby wszystko było dokładnie tak jak chcesz.' },
]

const payments = [
  { icon: '💸', label: 'BLIK (Przelew na tel.)' },
  { icon: '💳', label: 'PayPal' },
  { icon: '🏦', label: 'Przelew tradycyjny' },
]

export default function UslugiPage() {
  return (
    <>
      <PageHeader
        label="Nasza oferta"
        title="Usługi i warunki"
        description="Wszystko co oferujemy - autorskie boty, hosting, gwarancja, metody płatności. Bez ukrytych kosztów."
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-accent">Co robimy</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-3">Co wchodzi w skład usługi?</h2>
            <p className="text-silver2 max-w-lg">Każdy projekt to autorski kod pisany od zera, dopasowany do Twojego serwera.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="group bg-bg2 border border-white/[0.07] hover:border-accent/20 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl mb-4">{f.icon}</div>
                <h3 className="font-display font-bold text-white text-base mb-2">{f.title}</h3>
                <p className="text-sm text-silver2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-accent">Płatności</span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white mt-2 mb-3">Metody płatności</h2>
          <p className="text-silver2 mb-8">Obsługujemy trzy metody płatności. Standardowo płacisz po oddaniu projektu.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {payments.map((p, i) => (
              <div key={i} className="bg-bg2 border border-white/[0.07] hover:border-accent/20 rounded-xl p-4 flex items-center gap-3 font-mono text-sm font-semibold text-silver transition-colors">
                <span className="text-2xl">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>

          <div className="bg-accent/[0.06] border border-accent/[0.18] rounded-2xl p-6">
            <p className="text-sm text-silver2 leading-relaxed mb-3">
              <span className="text-accent2 font-semibold">Standardowa płatność</span> następuje po oddaniu gotowego projektu - najpierw dostajesz bota, potem płacisz.
            </p>
            <p className="text-sm text-silver2 leading-relaxed">
              <span className="text-accent2 font-semibold">Przy rozbudowanych zleceniach</span> wymagana jest zaliczka 50% przed startem, reszta po oddaniu. Dokładne warunki ustalamy po przesłaniu formularza.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/zamowienie" className="bg-accent hover:bg-accent2 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent/20">
              Zamów bota - wycena gratis
            </Link>
            <Link href="/regulamin" className="bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-silver px-7 py-3 rounded-xl font-semibold text-sm transition-all">
              Przeczytaj regulamin →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
