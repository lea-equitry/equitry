import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location capteur Equisense Motion | Equitry',
  description:
    'Louez le capteur Equisense Motion à partir de 30€/semaine. Suivez les performances de votre cheval : rythme, équilibre, sauts. Application mobile intuitive.',
}

export default function EquisensePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-poppins text-sage-light mb-6">
            <Link href="/capteurs" className="hover:text-sage transition-colors">Capteurs</Link>
            <span>›</span>
            <span className="text-sage-dark">Equisense</span>
          </div>
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Equisense Motion</p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-4">
            Capteur Equisense
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed">
            Suivez les performances de votre cheval en temps réel. Rythme, équilibre, nombre de sauts — toutes les données dans une application mobile intuitive.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div className="w-full aspect-[4/3] bg-sage-lighter/20 rounded-sm overflow-hidden">
              <img
                src="/capteurs/equisense.jpg"
                alt="Capteur Equisense Motion"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <ul className="space-y-3 mb-8">
                {[
                  'Suivi du rythme et de l\'équilibre en temps réel',
                  'Comptage automatique des sauts',
                  'Application mobile iOS et Android',
                  'Historique des séances accessible',
                  'S\'installe en quelques secondes sur le surfaix',
                  'Compatible toutes disciplines',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 font-poppins text-sm text-sage-dark">
                    <span className="text-sage mt-0.5 flex-none">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-sage-lighter/30 pt-6">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-poppins font-bold text-3xl text-sage-darkest">30€</span>
                  <span className="font-poppins font-light text-sage-light">/semaine</span>
                </div>
                <a
                  href="https://equitry-location.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mb-3"
                >
                  Réserver l'Equisense
                </a>
                <Link href="/contact" className="font-poppins text-xs text-sage-light hover:text-sage transition-colors text-center block">
                  Une question ? Contactez-nous →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
