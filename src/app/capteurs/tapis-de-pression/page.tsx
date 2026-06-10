import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location tapis capteur de pressions Safe HP | Equitry',
  description:
    'Louez le tapis capteur de pressions Safe HP. Analysez la répartition des pressions sous la selle, optimisez l\'équilibre du cavalier et le confort du cheval.',
}

export default function TapisDePresionPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-poppins text-sage-light mb-6">
            <Link href="/capteurs" className="hover:text-sage transition-colors">Capteurs</Link>
            <span>›</span>
            <span className="text-sage-dark">Tapis de pression</span>
          </div>
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Safe HP</p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-4">
            Tapis capteur de pressions
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed">
            Analysez en détail la répartition des pressions sous votre selle. Un outil essentiel pour détecter les déséquilibres et optimiser le bien-être du cheval.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div className="w-full aspect-[4/3] bg-sage-lighter/20 rounded-sm overflow-hidden">
              <img
                src="/capteurs/safe-hp-tapis.jpg"
                alt="Tapis capteur de pressions Safe HP"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-produit.jpg'
                }}
              />
            </div>

            <div>
              <ul className="space-y-3 mb-8">
                {[
                  'Cartographie complète des zones de pression',
                  'Détection des déséquilibres gauche/droite',
                  'Compatible avec toutes les selles',
                  'Rapport d\'analyse détaillé fourni',
                  'Recommandations personnalisées incluses',
                  'Idéal en collaboration avec votre sellier ou vétérinaire',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 font-poppins text-sm text-sage-dark">
                    <span className="text-sage mt-0.5 flex-none">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-sage-lighter/10 border border-sage-lighter/30 rounded-sm p-6 mb-6">
                <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-sage-darkest mb-3">
                  Ce que vous recevez
                </p>
                <ul className="space-y-2 font-poppins text-sm text-sage-dark font-light">
                  <li>→ Le tapis capteur Safe HP</li>
                  <li>→ Une cartographie PDF des pressions</li>
                  <li>→ Une analyse et des recommandations personnalisées</li>
                  <li>→ Un accompagnement par email</li>
                </ul>
              </div>

              <div className="border-t border-sage-lighter/30 pt-6">
                <p className="font-poppins text-sm text-sage-dark mb-2">Tarif sur devis selon la durée et l'usage</p>
                <a
                  href="https://equitry-location.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mb-3"
                >
                  Demander un devis
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
