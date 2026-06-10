import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { categories, getCategorie } from '@/data/catalogue'

export async function generateStaticParams() {
  return categories.map((cat) => ({ categorie: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { categorie: string }
}): Promise<Metadata> {
  const cat = getCategorie(params.categorie)
  if (!cat) return {}
  return {
    title: `Location ${cat.nom} | Equitry`,
    description: cat.description,
  }
}

export default function CategoriePage({
  params,
}: {
  params: { categorie: string }
}) {
  const cat = getCategorie(params.categorie)
  if (!cat) notFound()

  const prixMin = Math.min(...cat.produits.map((p) => p.prix_jour))

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-poppins text-sage-light mb-6">
            <Link href="/location" className="hover:text-sage transition-colors">Location</Link>
            <span>›</span>
            <span className="text-sage-dark">{cat.nom}</span>
          </div>
          <span className="text-4xl block mb-4">{cat.icon}</span>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-4">
            Location {cat.nom.toLowerCase()}
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed mb-4">
            {cat.description}
          </p>
          <p className="font-poppins text-sm text-sage">
            À partir de <strong>{prixMin}€/jour</strong> · Pressing inclus · Livraison 48h
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.produits.map((produit) => (
              <Link
                key={produit.slug}
                href={`/location/${cat.slug}/${produit.slug}`}
                className="card group hover:border-sage-dark transition-all duration-300"
              >
                <div className="w-full aspect-[4/3] bg-sage-lighter/20 rounded-sm mb-5 overflow-hidden">
                  <img
                    src={produit.image}
                    alt={produit.nom}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-poppins text-xs text-sage-light uppercase tracking-widest mb-1">
                  {produit.marque}
                </p>
                <h2 className="font-poppins font-bold text-lg text-sage-darkest mb-3 group-hover:text-sage transition-colors">
                  {produit.nom}
                </h2>
                <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed mb-4 line-clamp-2">
                  {produit.description}
                </p>
                {produit.tailles && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {produit.tailles.map((t) => (
                      <span key={t} className="font-poppins text-xs px-2 py-0.5 bg-sage-lighter/30 text-sage-dark rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-sage-lighter/30">
                  <span className="font-poppins font-bold text-sage-dark">
                    {produit.prix_jour}€<span className="font-normal text-sage-light text-xs">/jour</span>
                  </span>
                  <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage-dark">
                    Voir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
