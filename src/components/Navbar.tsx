'use client'

import { useState } from 'react'
import Link from 'next/link'
import { categories } from '@/data/catalogue'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sage-lighter/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-none">
          <img src="/logo.svg" alt="Equitry" className="h-10 w-auto" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-6">

          {/* Location avec dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown('location')}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              href="/location"
              className="font-poppins text-sm font-medium text-sage-darkest hover:text-sage transition-colors tracking-wide flex items-center gap-1"
            >
              Location
              <span className="text-sage-lighter text-xs">▾</span>
            </Link>
            {dropdown === 'location' && (
              <div className="absolute top-full left-0 mt-2 bg-cream border border-sage-lighter/30 shadow-lg min-w-[200px] py-2 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/location/${cat.slug}`}
                    className="flex items-center gap-2 px-4 py-2.5 font-poppins text-sm text-sage-dark hover:bg-sage-lighter/10 hover:text-sage-darkest transition-colors"
                  >
                    <span className="text-base">{cat.icon}</span>
                    {cat.nom}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/abonnement" className="font-poppins text-sm font-medium text-sage-darkest hover:text-sage transition-colors tracking-wide">
            Abonnement
          </Link>

          <Link href="/occasion" className="font-poppins text-sm font-medium text-sage-darkest hover:text-sage transition-colors tracking-wide">
            Occasion
          </Link>

          {/* Capteurs avec dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown('capteurs')}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link
              href="/capteurs"
              className="font-poppins text-sm font-medium text-sage-darkest hover:text-sage transition-colors tracking-wide flex items-center gap-1"
            >
              Capteurs
              <span className="text-sage-lighter text-xs">▾</span>
            </Link>
            {dropdown === 'capteurs' && (
              <div className="absolute top-full left-0 mt-2 bg-cream border border-sage-lighter/30 shadow-lg min-w-[220px] py-2 z-50">
                <Link href="/capteurs/tension-de-renes" className="flex items-center gap-2 px-4 py-2.5 font-poppins text-sm text-sage-dark hover:bg-sage-lighter/10 hover:text-sage-darkest transition-colors">
                  <span>📊</span> Tension de rênes
                </Link>
                <Link href="/capteurs/tapis-de-pression" className="flex items-center gap-2 px-4 py-2.5 font-poppins text-sm text-sage-dark hover:bg-sage-lighter/10 hover:text-sage-darkest transition-colors">
                  <span>🗺️</span> Tapis de pression
                </Link>
                <Link href="/capteurs/equisense" className="flex items-center gap-2 px-4 py-2.5 font-poppins text-sm text-sage-dark hover:bg-sage-lighter/10 hover:text-sage-darkest transition-colors">
                  <span>📱</span> Equisense
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="font-poppins text-sm font-medium text-sage-darkest hover:text-sage transition-colors tracking-wide">
            Blog
          </Link>
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block flex-none">
          <a href="https://equitry-location.fr/" className="btn-primary text-xs py-2 px-6">
            Réserver
          </a>
        </div>

        {/* Burger mobile */}
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

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden bg-cream border-t border-sage-lighter/30 px-4 py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">

          <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-sage-light px-2 mb-1">Location</p>
          <Link href="/location" className="font-poppins text-sm font-medium text-sage-darkest py-2 px-2 hover:text-sage" onClick={() => setOpen(false)}>
            Tout le catalogue
          </Link>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/location/${cat.slug}`} className="font-poppins text-sm text-sage-dark py-2 px-4 hover:text-sage border-b border-sage-lighter/10" onClick={() => setOpen(false)}>
              {cat.icon} {cat.nom}
            </Link>
          ))}

          <div className="my-2 border-t border-sage-lighter/20" />

          <Link href="/abonnement" className="font-poppins text-sm font-medium text-sage-darkest py-2 px-2 hover:text-sage border-b border-sage-lighter/20" onClick={() => setOpen(false)}>
            Abonnement
          </Link>
          <Link href="/occasion" className="font-poppins text-sm font-medium text-sage-darkest py-2 px-2 hover:text-sage border-b border-sage-lighter/20" onClick={() => setOpen(false)}>
            Occasion
          </Link>

          <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-sage-light px-2 mt-2 mb-1">Capteurs</p>
          <Link href="/capteurs/tension-de-renes" className="font-poppins text-sm text-sage-dark py-2 px-4 hover:text-sage border-b border-sage-lighter/10" onClick={() => setOpen(false)}>
            📊 Tension de rênes
          </Link>
          <Link href="/capteurs/tapis-de-pression" className="font-poppins text-sm text-sage-dark py-2 px-4 hover:text-sage border-b border-sage-lighter/10" onClick={() => setOpen(false)}>
            🗺️ Tapis de pression
          </Link>
          <Link href="/capteurs/equisense" className="font-poppins text-sm text-sage-dark py-2 px-4 hover:text-sage border-b border-sage-lighter/10" onClick={() => setOpen(false)}>
            📱 Equisense
          </Link>

          <div className="my-2 border-t border-sage-lighter/20" />

          <Link href="/blog" className="font-poppins text-sm font-medium text-sage-darkest py-2 px-2 hover:text-sage border-b border-sage-lighter/20" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="font-poppins text-sm font-medium text-sage-darkest py-2 px-2 hover:text-sage border-b border-sage-lighter/20" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <a href="https://equitry-location.fr/" className="btn-primary mt-4 text-center text-xs">
            Réserver
          </a>
        </div>
      )}
    </header>
  )
}
