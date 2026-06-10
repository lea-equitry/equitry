import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-sage-darkest text-cream/80 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">

          <div className="col-span-2 sm:col-span-1">
            <img src="/logo.svg" alt="Equitry" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="font-poppins font-light text-sm text-cream/60 leading-relaxed">
              Le premier service de location de matériel équestre en France.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://instagram.com/equitry" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-cream transition-colors text-sm font-poppins">Instagram</a>
              <a href="https://facebook.com/equitry" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-cream transition-colors text-sm font-poppins">Facebook</a>
            </div>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-cream text-xs tracking-widest uppercase mb-4">Location</h3>
            <ul className="space-y-2">
              <li><Link href="/location/veste-de-concours" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Vestes de concours</Link></li>
              <li><Link href="/location/tapis-de-selle" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Tapis de selle</Link></li>
              <li><Link href="/location/bonnet-cheval" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Bonnets cheval</Link></li>
              <li><Link href="/abonnement" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Abonnement</Link></li>
              <li><Link href="/occasion" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Occasion</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-cream text-xs tracking-widest uppercase mb-4">Capteurs</h3>
            <ul className="space-y-2">
              <li><Link href="/capteurs/tension-de-renes" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Tension de rênes</Link></li>
              <li><Link href="/capteurs/tapis-de-pression" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Tapis de pression</Link></li>
              <li><Link href="/capteurs/equisense" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Equisense</Link></li>
            </ul>
            <h3 className="font-poppins font-semibold text-cream text-xs tracking-widest uppercase mt-6 mb-4">Infos</h3>
            <ul className="space-y-2">
              <li><Link href="/comment-ca-marche" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Comment ça marche</Link></li>
              <li><Link href="/faq" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-cream text-xs tracking-widest uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@equitry.fr" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">hello@equitry.fr</a></li>
              <li><Link href="/contact" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">Formulaire contact</Link></li>
              <li><Link href="/a-propos" className="font-poppins font-light text-sm text-cream/60 hover:text-cream transition-colors">À propos</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-xs text-cream/40">© {new Date().getFullYear()} Equitry – Tous droits réservés</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="font-poppins text-xs text-cream/40 hover:text-cream/70 transition-colors">Mentions légales</Link>
            <Link href="/cgl" className="font-poppins text-xs text-cream/40 hover:text-cream/70 transition-colors">CGL</Link>
            <Link href="/cgv" className="font-poppins text-xs text-cream/40 hover:text-cream/70 transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
