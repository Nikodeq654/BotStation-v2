import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulamin - BotStation',
  description: 'Regulamin współpracy BotStation. Zasady zamówień, płatności, hosting i gwarancja.',
}

const sections = [
  {
    num: '§1', title: 'Kultura i zachowanie',
    items: [
      'Bezwzględny zakaz obrażania innych użytkowników i administracji. Toksyczne zachowanie nie będzie tolerowane.',
      'Kanały służą do konkretnych celów. Zakaz spamu, floodu oraz nieuzasadnionego pingowania administracji.',
      'Zakaz reklamowania innych serwerów lub usług - skutkuje natychmiastowym i nieodwołalnym banem.',
      'Zakaz publikowania treści drastycznych, nielegalnych lub naruszających ToS platformy Discord.',
    ]
  },
  {
    num: '§2', title: 'Zamówienia i wycena',
    items: [
      'Każde zlecenie wyceniane jest indywidualnie. Analiza techniczna jest bezpłatna i niezobowiązująca.',
      'Realizacja rozpoczyna się po akceptacji wyceny i ustaleniu płatności.',
      'Wykonawca zastrzega sobie prawo do odmowy przyjęcia zlecenia bez podania przyczyny.',
    ]
  },
  {
    num: '§3', title: 'Płatności',
    items: [
      'Standardowo płatność następuje po oddaniu gotowego projektu.',
      'Przy rozbudowanych zleceniach wymagana jest zaliczka 50% przed startem, reszta po oddaniu.',
      'W przypadku rezygnacji po wpłacie zaliczki - zwrot nie przysługuje, jeśli prace zostały rozpoczęte.',
    ]
  },
  {
    num: '§4', title: 'Hosting i gwarancja',
    items: [
      'Każdy bot otrzymuje dożywotnie utrzymanie 24/7 bez dodatkowych opłat miesięcznych.',
      'Darmowe naprawy błędów kodu są dożywotnie, dopóki bot znajduje się na naszym hostingu.',
      'Od oddania projektu klient ma 7 dni na darmowe poprawki i drobne modyfikacje.',
      'Nie ponosimy odpowiedzialności za przestoje wynikające z awarii platform trzecich (Discord, serwery).',
    ]
  },
  {
    num: '§5', title: 'Modyfikacje i rozwój',
    items: [
      'Po upływie 7 dni wszelkie zmiany logiki lub dodawanie modułów podlegają osobnej wycenie.',
      'Drobne poprawki kosmetyczne mogą być wykonane bezpłatnie według uznania wykonawcy.',
    ]
  },
  {
    num: '§6', title: 'Własność i kod źródłowy',
    items: [
      'Kod źródłowy bota pozostaje własnością wykonawcy przez cały czas trwania hostingu.',
      'Na życzenie klienta kod może zostać przekazany - warunki ustalane są indywidualnie.',
      'W przypadku wyłączenia hostingu klient otrzymuje kod źródłowy na podany adres e-mail.',
    ]
  },
  {
    num: '§7', title: 'Wygaśnięcie hostingu',
    items: [
      'Hosting może zostać wyłączony jeśli serwer klienta stanie się nieaktywny przez ponad 30 dni.',
      'Przed wyłączeniem podejmowana jest próba kontaktu z 7-dniowym wyprzedzeniem.',
      'Reaktywacja hostingu po wygaśnięciu możliwa jest bezpłatnie na wniosek klienta.',
    ]
  },
  {
    num: '§8', title: 'Sankcje',
    items: [
      'Naruszenie zasad kultury może skutkować ostrzeżeniem, wyciszeniem lub banem.',
      'Złamanie regulaminu w trakcie zlecenia daje prawo do przerwania prac bez zwrotu kosztów.',
      'Nieznajomość regulaminu nie zwalnia z jego przestrzegania.',
    ]
  },
]

export default function RegulaminPage() {
  return (
    <>
      <PageHeader
        label="Zasady współpracy"
        title="Regulamin"
        description="Przystąpienie do serwera lub złożenie zamówienia jest równoznaczne z akceptacją poniższych zasad."
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sections.map((s, i) => (
              <div key={i} className="bg-bg2 border border-white/[0.07] hover:border-accent/15 rounded-2xl p-6 transition-colors">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-md">{s.num}</span>
                  <span className="font-display font-bold text-white text-sm">{s.title}</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="text-xs text-silver2 leading-relaxed pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-accent/50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-accent/[0.06] border border-accent/[0.15] rounded-xl text-sm text-silver2 leading-relaxed">
            <span className="text-accent2 font-semibold">Pamiętaj:</span> Regulamin obowiązuje od momentu dołączenia do serwera lub złożenia zamówienia. W razie wątpliwości{' '}
            <a href="https://discord.com/channels/1494772280323080243/1501631817210531910" target="_blank" rel="noopener noreferrer" className="text-accent2 hover:text-white transition-colors">
              utwórz ticket na kanale wsparcia
            </a>{' '}
            - chętnie wyjaśnimy wszystko przed złożeniem zlecenia.
          </div>
        </div>
      </section>
    </>
  )
}
