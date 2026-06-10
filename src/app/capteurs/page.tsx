import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location capteurs équestres – Safe HP & Equisense | Equitry',
  description:
    'Louez des capteurs équestres pour analyser votre pratique. Capteur de tension de rênes Safe HP Ally, tapis capteur de pressions, Equisense Motion. À partir de 30€/semaine.',
}

const capteurs = [
  {
    slug: 'tension-de-renes',
    nom: 'Capteur de tension de rênes',
    marque: 'Safe HP Ally',
    prix: '100€/jour',
    description: 'Mesurez en temps réel la tension exercée sur les rênes de votre cheval. Un outil pédagogique puissant pour les cavaliers soucieux de leur équitation.',
    points: [
      'Mesure en temps réel',
      'Rapport PDF personnalisé',
      'Compatible toutes disciplines',
      'Accompagnement pédagogique inclus',
    ],
    icon: '📊',
  },
  {
    slug: 'tapis-de-pression',
    nom: 'Tapis capteur de pressions',
    marque: 'Safe HP',
    prix: 'Sur devis',
    description: 'Analysez la répartition des pressions sous la selle. Idéal pour optimiser l\'équilibre du cavalier et le bien-être du cheval.',
    points: [
      'Cartographie des pressions',
      'Détection des déséquilibres',
      'Compatible toutes selles',
      'Rapport d\'analyse fourni',
    ],
    icon: '🗺️',
  },
  {
    slug: 'equisense',
    nom: 'Capteur Equisense',
    marque: 'Equisense Motion',
    prix: '30€/semaine',
    description: 'Suivez les performances de votre cheval grâce au capteur Equisense. Rythme, équilibre, sauts — toutes les données dans une application intuitive.',
    points: [
      'Suivi des performances en temps réel',
      'Analyse du rythme et de l\'équilibre',
      'Application mobile intuitive',
      'Données historiques accessibles',
    ],
    icon: '📱',
  },
]

export default function CapteursPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">
            Technologie équestre
          </p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-4">
            Capteurs équestres à la location
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed">
            Analysez votre pratique sans investissement. Safe HP et Equisense disponibles à la journée ou à la semaine, avec accompagnement pédagogique.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capteurs.map((c) => (
              <Link
                key={c.slug}
                href={`/capteurs/${c.slug}`}
                className="card group hover:border-sage-dark transition-all duration-300"
              >
                <span className="text-4xl mb-5 block">{c.icon}</span>
                <p className="font-poppins text-xs text-sage-light uppercase tracking-widest mb-2">{c.marque}</p>
                <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-3 group-hover:text-sage transition-colors">
                  {c.nom}
                </h2>
                <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed mb-5">
                  {c.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 font-poppins text-xs text-sage-dark">
                      <span className="text-sage mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-sage-lighter/30">
                  <span className="font-poppins font-bold text-sage-dark">{c.prix}</span>
                  <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage-dark">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-sage-darkest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-poppins font-bold text-3xl text-cream mb-4">
            Vous hésitez sur le capteur adapté ?
          </h2>
          <p className="font-poppins font-light text-cream/70 mb-8">
            Contactez-nous — nous vous guidons vers le capteur le plus pertinent selon votre discipline et vos objectifs.
          </p>
          <Link href="/contact" className="btn-outline border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
