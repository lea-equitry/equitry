import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/data/catalogue'

export const metadata: Metadata = {
  title: 'Location tenue complète équitation | Equitry',
  description:
    'Louez une tenue de concours complète : veste, tapis de selle et bonnet assortis. Livraison partout en France sous 48h. À partir de 55€/jour.',
}

const tenues = [
  {
    id: 'classic',
    nom: 'Tenue Classique',
    description: 'L\'essentiel élégant pour vos concours.',
    veste: { nom: 'Le Sabotier Colette', slug: 'le-sabotier-colette', categorieSlug: 'veste-de-concours' },
    tapis: { nom: 'Tapis Cavalleria Toscana', slug: 'cavalleria-toscana', categorieSlug: 'tapis-de-selle' },
    bonnet: { nom: 'Bonnet Cavalleria Toscana', slug: 'bonnet-cavalleria-toscana', categorieSlug: 'bonnet-cheval' },
    prix_total: 62,
    prix_seul: 72,
    couleur: 'Tons naturels et broderies élégantes',
  },
  {
    id: 'sport',
    nom: 'Tenue Sport',
    description: 'Performance et légèreté pour les journées intenses.',
    veste: { nom: 'Horse Pilot Aeromesh', slug: 'horse-pilot-aeromesh', categorieSlug: 'veste-de-concours' },
    tapis: { nom: 'Tapis Oxxer Diamant', slug: 'oxxer-diamant', categorieSlug: 'tapis-de-selle' },
    bonnet: { nom: 'Bonnet Oxxer Mesh', slug: 'oxxer-mesh', categorieSlug: 'bonnet-cheval' },
    prix_total: 58,
    prix_seul: 60,
    couleur: 'Look sport coordonné Oxxer',
  },
  {
    id: 'prestige',
    nom: 'Tenue Prestige',
    description: 'Pour les grandes occasions, sans compromis.',
    veste: { nom: 'Horse Pilot Aeromade', slug: 'horse-pilot-aeromade', categorieSlug: 'veste-de-concours' },
    tapis: { nom: 'Tapis GEM Ten', slug: 'gem-ten', categorieSlug: 'tapis-de-selle' },
    bonnet: { nom: 'Bonnet pailleté', slug: 'bonnet-pailletes', categorieSlug: 'bonnet-cheval' },
    prix_total: 68,
    prix_seul: 80,
    couleur: 'Ornements GEM + paillettes pour briller',
  },
]

export default function TenuteCompletePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-poppins text-sage-light mb-6">
            <Link href="/location" className="hover:text-sage transition-colors">Location</Link>
            <span>›</span>
            <span className="text-sage-dark">Tenue complète</span>
          </div>
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Pack tenue</p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-4">
            Louez une tenue complète
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed mb-4">
            Veste, tapis et bonnet assortis, sélectionnés par notre équipe pour un rendu cohérent et élégant. Plus simple qu'à la pièce, livré ensemble sous 48h.
          </p>
          <p className="font-poppins text-sm text-sage font-medium">
            À partir de 55€/jour pour les 3 pièces · Pressing inclus · Livraison partout en France
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tenues.map((tenue) => (
              <div key={tenue.id} className="card border-sage-lighter/40 hover:border-sage transition-all duration-300">
                <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-2">{tenue.nom}</h2>
                <p className="font-poppins font-light text-sm text-sage-dark mb-1">{tenue.description}</p>
                <p className="font-poppins text-xs text-sage-light italic mb-6">{tenue.couleur}</p>

                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Veste', item: tenue.veste },
                    { label: 'Tapis', item: tenue.tapis },
                    { label: 'Bonnet', item: tenue.bonnet },
                  ].map(({ label, item }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-sage-lighter/20">
                      <span className="font-poppins text-xs text-sage-light uppercase tracking-widest w-12">{label}</span>
                      <Link
                        href={`/location/${item.categorieSlug}/${item.slug}`}
                        className="font-poppins text-sm text-sage-dark hover:text-sage transition-colors flex-1 text-right"
                      >
                        {item.nom} →
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="bg-sage-lighter/10 rounded-sm p-4 mb-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-poppins font-bold text-2xl text-sage-darkest">
                        {tenue.prix_total}€<span className="text-sm font-normal text-sage-light">/jour</span>
                      </p>
                      <p className="font-poppins text-xs text-sage-light line-through">{tenue.prix_seul}€ à la pièce</p>
                    </div>
                    <span className="font-poppins text-xs font-semibold text-sage bg-sage/10 px-3 py-1 rounded-sm">
                      Pack inclus
                    </span>
                  </div>
                </div>

                <a
                  href="https://equitry-location.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Réserver cette tenue
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-4">
            Vous souhaitez une tenue sur mesure ?
          </h2>
          <p className="font-poppins font-light text-sage-dark mb-6">
            Choisissez chaque pièce individuellement parmi notre catalogue complet — vestes, tapis et bonnets disponibles à la pièce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/location/veste-de-concours" className="btn-primary">Voir les vestes</Link>
            <Link href="/location/tapis-de-selle" className="btn-outline">Voir les tapis</Link>
          </div>
        </div>
      </section>
    </>
  )
}
