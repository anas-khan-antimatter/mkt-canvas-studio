import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/" className="text-white text-sm uppercase tracking-[0.3em] font-display">
          Canvas Studio
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/70 hover:text-white text-xs uppercase tracking-[0.15em] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="text-white text-xs uppercase tracking-[0.2em] border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-ink-950 transition-all"
        >
          Start a Project
        </Link>
      </nav>
    </header>
  )
}