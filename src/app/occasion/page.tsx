'use client'

import { useState } from 'react'
import Link from 'next/link'
import { categories, conditionLabels, conditionColors, type Condition } from '@/data/catalogue'

const conditions: Condition[] = ['neuf', 'tres-bon', 'bon']

export default function OccasionPage() {
  const [conditionFiltre, setConditionFiltre] = useState<Condition | null>(null)
  const [categorieFiltre, setCategorieFiltre] = useState<string | null>(null)

  const tousLesProduits = categories.flatMap((cat) =>
    cat.produits
      .filter((p) => p.prix_occasion)
      .map((p) => ({ ...p, categorieNom: cat.nom, categorieSlug: cat.slug }))
  )

  const produitsFiltres = tousLesProduits.filter((p) => {
    if (categorieFiltre && p.categorieSlug !== categorieFiltre) return false
    if (conditionFiltre && !p.prix_occasion?.[conditionFiltre]) return false
    return true
  })

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">
            Occasion
          </p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-4">
            Matériel équestre d'occasion
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed mb-4">
            Achetez du matériel équestre contrôlé et garanti par Equitry. Chaque pièce est inspectée, nettoyée et cotée selon son état — comme Backmarket, pour l'équitation.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {conditions.map((c) => (
              <span key={c} className={`font-poppins text-xs px-3 py-1.5 rounded-sm font-medium ${conditionColors[c]}`}>
                {conditionLabels[c]}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream border-b border-sage-lighter/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-poppins text-xs font-semibold text-sage-darkest uppercase tracking-widest mr-2">
              Filtrer :
            </span>

            {/* Filtre catégorie */}
            <button
              onClick={() => setCategorieFiltre(null)}
              className={`font-poppins text-xs px-4 py-2 border transition-all ${
                !categorieFiltre
                  ? 'bg-sage-darkest text-cream border-sage-darkest'
                  : 'border-sage-lighter text-sage-dark hover:border-sage-dark'
              }`}
            >
              Toutes catégories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategorieFiltre(cat.slug === categorieFiltre ? null : cat.slug)}
                className={`font-poppins text-xs px-4 py-2 border transition-all ${
                  categorieFiltre === cat.slug
                    ? 'bg-sage-darkest text-cream border-sage-darkest'
                    : 'border-sage-lighter text-sage-dark hover:border-sage-dark'
                }`}
              >
                {cat.nom}
              </button>
            ))}

            <span className="mx-2 text-sage-lighter">|</span>

            {/* Filtre état */}
            <button
              onClick={() => setConditionFiltre(null)}
              className={`font-poppins text-xs px-4 py-2 border transition-all ${
                !conditionFiltre
                  ? 'bg-sage text-cream border-sage'
                  : 'border-sage-lighter text-sage-dark hover:border-sage'
              }`}
            >
              Tous les états
            </button>
            {conditions.map((c) => (
              <button
                key={c}
                onClick={() => setConditionFiltre(c === conditionFiltre ? null : c)}
                className={`font-poppins text-xs px-4 py-2 border transition-all ${
                  conditionFiltre === c
                    ? 'bg-sage text-cream border-sage'
                    : 'border-sage-lighter text-sage-dark hover:border-sage'
                }`}
              >
                {conditionLabels[c]}
              </button>
            ))}
          </div>
          <p className="font-poppins text-xs text-sage-light mt-4">
            {produitsFiltres.length} article{produitsFiltres.length > 1 ? 's' : ''} disponible{produitsFiltres.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {produitsFiltres.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-poppins text-sage-dark mb-4">Aucun article ne correspond à ces filtres.</p>
              <button
                onClick={() => { setConditionFiltre(null); setCategorieFiltre(null) }}
                className="font-poppins text-sm text-sage hover:text-sage-dark transition-colors underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {produitsFiltres.map((produit) => (
                <div key={`${produit.categorieSlug}-${produit.slug}`} className="card group">
                  <div className="w-full aspect-[4/3] bg-sage-lighter/20 rounded-sm mb-4 overflow-hidden">
                    <img
                      src={produit.image}
                      alt={produit.nom}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-produit.jpg'
                      }}
                    />
                  </div>
                  <p className="font-poppins text-xs text-sage-light uppercase tracking-widest mb-1">
                    {produit.marque}
                  </p>
                  <h2 className="font-poppins font-bold text-base text-sage-darkest mb-3">
                    {produit.nom}
                  </h2>

                  {/* Prix par état */}
                  <div className="space-y-2 mb-5">
                    {conditions.map((c) =>
                      produit.prix_occasion?.[c] ? (
                        <div key={c} className="flex items-center justify-between">
                          <span className={`font-poppins text-xs px-2 py-0.5 rounded-sm ${conditionColors[c]}`}>
                            {conditionLabels[c]}
                          </span>
                          <span className="font-poppins font-bold text-sage-dark text-sm">
                            {produit.prix_occasion[c]}€
                          </span>
                        </div>
                      ) : null
                    )}
                  </div>

                  <a
                    href={produit.lien_reservation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center font-poppins text-xs font-semibold tracking-widest uppercase text-sage-darkest border border-sage-darkest py-3 hover:bg-sage-darkest hover:text-cream transition-all duration-200"
                  >
                    Contacter pour acheter
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-14 bg-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-4">
            Comment ça fonctionne ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
            {[
              { n: '01', titre: 'Inspecté', desc: 'Chaque article est contrôlé par notre équipe et coté selon un barème rigoureux.' },
              { n: '02', titre: 'Nettoyé', desc: 'L\'article est nettoyé et préparé avant expédition.' },
              { n: '03', titre: 'Garanti', desc: 'L\'état décrit est garanti. Retour possible sous 48h si non conforme.' },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-poppins font-bold text-4xl text-sage/30 mb-2">{s.n}</p>
                <h3 className="font-poppins font-semibold text-sage-darkest mb-2">{s.titre}</h3>
                <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
