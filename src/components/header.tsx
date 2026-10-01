'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Generator', href: '/generator' },
  { label: 'Templates', href: '/templated' },
  { label: 'Contact', href: '/#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink-950/80 backdrop-blur-md border-b border-neon-400/10">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link href="/" className="text-neon-400 text-sm uppercase tracking-[0.3em] font-display neon-glow">
          Canvas Studio
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink-300 hover:text-neon-400 text-xs uppercase tracking-[0.2em] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="text-neon-400 text-xs uppercase tracking-[0.2em] border border-neon-400/40 px-5 py-2 rounded-full hover:bg-neon-400 hover:text-ink-950 transition-all"
            >
              Start a Project
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neon-400"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink-950 border-t border-neon-400/10 px-6 py-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-ink-300 hover:text-neon-400 text-sm uppercase tracking-[0.2em] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block text-neon-400 text-sm uppercase tracking-[0.2em] border border-neon-400/40 px-5 py-2 rounded-full text-center hover:bg-neon-400 hover:text-ink-950 transition-all"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  )
}