import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BotStation - Profesjonalne Boty Discord',
  description: 'Tworzymy autorskie boty Discord dopasowane do Twoich potrzeb. Dożywotni hosting 24/7, darmowa naprawa błędów, pełne wsparcie techniczne.',
  keywords: 'boty discord, discord bot, bot na zamówienie, hosting bota discord, BotStation',
  openGraph: {
    title: 'BotStation - Profesjonalne Boty Discord',
    description: 'Autorskie boty Discord na zamówienie. Dożywotni hosting, gwarancja, darmowa wycena.',
    type: 'website',
    locale: 'pl_PL',
  },
  themeColor: '#5b7fff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-bg text-white antialiased">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
