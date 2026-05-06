'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/location-courte-duree', label: 'Location' },
  { href: '/abonnement', label: 'Abonnement' },
  { href: '/capteurs', label: 'Capteurs' },
  { href: '/comment-ca-marche', label: 'Comment ca marche' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sage-lighter/30">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Equitry"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-poppins text-sm font-medium text-sage-darkest hover:text-sage transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="https://equitry-location.fr/" className="btn-primary text-xs py-2 px-6">
            Reserver
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-sage-darkest transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-sage-darkest transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-sage-darkest transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-sage-lighter/30 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-poppins text-sm font-medium text-sage-darkest hover:text-sage py-2 border-b border-sage-lighter/20"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://equitry-location.fr/" className="btn-primary mt-2 text-center text-xs">
            Reserver
          </a>
        </div>
      )}
    </header>
  )
}
