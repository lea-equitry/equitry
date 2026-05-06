import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales | Equitry',
  description: 'Mentions légales du site Equitry – location de matériel équestre.',
}

export default function MentionsLegales() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest mb-6">Mentions légales</h1>
          <div className="equitry-divider" />
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Éditeur du site</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Equitry – Entreprise individuelle<br />
              Région PACA, France<br />
              Email : <a href="mailto:hello@equitry.fr" className="text-sage hover:underline">hello@equitry.fr</a>
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Directrice de publication</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Léa Espanet
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Hébergement</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">vercel.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Propriété intellectuelle</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, logo, structure) est la propriété exclusive d'Equitry.
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Données personnelles</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.
              Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès,
              de rectification et de suppression de vos données en contactant hello@equitry.fr.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Cookies</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.
              Aucun cookie publicitaire ou de traçage n'est utilisé sans votre consentement.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/" className="font-poppins text-sm text-sage hover:text-sage-dark transition-colors">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
