import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-sage-darkest text-cream/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Marque */}
          <div className="md:col-span-1">
            <img src="/logo-blanc.png" alt="Equitry" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="font-poppins font-light text-sm text-cream/60 leading-relaxed">
              Le premier service de location de matériel équestre en France. 
              Location à la journée ou abonnement mensuel.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-cream text-sm tracking-widest uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { href: '/location-courte-duree', label: 'Location courte durée' },
                { href: '/abonnement', label: 'Abonnement mensuel' },
                { href: '/capteurs', label: 'Capteurs équestres' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h3 className="font-poppins font-semibold text-cream text-sm tracking-widest uppercase mb-4">Informations</h3>
            <ul className="space-y-2">
              {[
                { href: '/comment-ca-marche', label: 'Comment ça marche' },
                { href: '/faq', label: 'FAQ' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-cream text-sm tracking-widest uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@equitry.fr" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">
                  contact@equitry.fr
                </a>
              </li>
              <li className="font-poppins font-light text-sm text-cream/60">Région PACA – France entière</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/equitry" target="_blank" rel="noopener noreferrer"
                className="text-cream/50 hover:text-cream transition-colors text-sm font-poppins tracking-wide">
                Instagram
              </a>
              <a href="https://facebook.com/equitry" target="_blank" rel="noopener noreferrer"
                className="text-cream/50 hover:text-cream transition-colors text-sm font-poppins tracking-wide">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-xs text-cream/40">
            © {new Date().getFullYear()} Equitry – Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="font-poppins text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgv" className="font-poppins text-xs text-cream/40 hover:text-cream/70 transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
