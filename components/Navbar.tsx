'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Start' },
  { href: '/uslugi', label: 'Usługi' },
  { href: '/faq', label: 'FAQ' },
  { href: '/rangi', label: 'Rangi' },
  { href: '/regulamin', label: 'Regulamin' },
  { href: '/zamowienie', label: 'Zamów bota' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080910]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <span className="text-accent text-xs font-bold font-mono">BS</span>
          </div>
          <span className="font-display font-bold text-white tracking-widest text-sm">BOTSTATION</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href
            const isOrder = l.href === '/zamowienie'
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isOrder
                      ? 'bg-accent text-white hover:bg-accent2 shadow-lg shadow-accent/20'
                      : active
                      ? 'text-white bg-white/5'
                      : 'text-silver2 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {l.label}
                  {active && !isOrder && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            )
          })}
          <li>
            <a
              href="https://discord.gg/hE25u8P2Cw"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 px-3 py-2 text-sm font-medium text-accent2 border border-accent/30 rounded-lg hover:bg-accent/10 transition-all duration-200"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.036.052a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.036-.05c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
              Discord
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-silver2 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 border-b border-white/[0.06]' : 'max-h-0'}`}>
        <div className="bg-[#080910]/98 backdrop-blur-xl px-4 py-3 flex flex-col gap-1">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  l.href === '/zamowienie'
                    ? 'bg-accent text-white text-center mt-2'
                    : active
                    ? 'text-white bg-white/5'
                    : 'text-silver2 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
          <a
            href="https://discord.gg/hE25u8P2Cw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-lg text-sm font-medium text-accent2 border border-accent/30 text-center mt-1 hover:bg-accent/10 transition-all"
          >
            Dołącz na Discord →
          </a>
        </div>
      </div>
    </nav>
  )
}
