import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { categories, getCategorie, getProduit } from '@/data/catalogue'

export async function generateStaticParams() {
  return categories.flatMap((cat) =>
    cat.produits.map((p) => ({ categorie: cat.slug, produit: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: { categorie: string; produit: string }
}): Promise<Metadata> {
  const produit = getProduit(params.categorie, params.produit)
  if (!produit) return {}
  return {
    title: produit.seo_title,
    description: produit.seo_description,
  }
}

export default function ProduitPage({
  params,
}: {
  params: { categorie: string; produit: string }
}) {
  const cat = getCategorie(params.categorie)
  const produit = getProduit(params.categorie, params.produit)
  if (!cat || !produit) notFound()

  const autresProduits = cat.produits.filter((p) => p.slug !== produit.slug).slice(0, 3)

  return (
    <>
      <section className="pt-32 pb-0 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-poppins text-sage-light mb-8">
            <Link href="/location" className="hover:text-sage transition-colors">Location</Link>
            <span>›</span>
            <Link href={`/location/${cat.slug}`} className="hover:text-sage transition-colors">{cat.nom}</Link>
            <span>›</span>
            <span className="text-sage-dark">{produit.nom}</span>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Image */}
            <div className="w-full aspect-[4/3] bg-sage-lighter/20 rounded-sm overflow-hidden">
              <img
                src={produit.image}
                alt={produit.nom}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-produit.jpg'
                }}
              />
            </div>

            {/* Contenu */}
            <div>
              <p className="font-poppins text-xs text-sage-light uppercase tracking-widest mb-2">
                {produit.marque}
              </p>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-sage-darkest mb-4">
                {produit.nom}
              </h1>
              <p className="font-poppins font-light text-sage-dark leading-relaxed mb-6">
                {produit.description}
              </p>

              {/* Points clés */}
              <ul className="space-y-2 mb-6">
                {produit.points_cles.map((point) => (
                  <li key={point} className="flex items-start gap-3 font-poppins text-sm text-sage-dark">
                    <span className="text-sage mt-0.5 flex-none">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tailles */}
              {produit.tailles && (
                <div className="mb-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-sage-darkest mb-2">
                    Tailles disponibles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {produit.tailles.map((t) => (
                      <span key={t} className="font-poppins text-sm px-3 py-1 border border-sage-lighter text-sage-dark rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Prix et CTA */}
              <div className="border-t border-sage-lighter/30 pt-6">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-poppins font-bold text-3xl text-sage-darkest">{produit.prix_jour}€</span>
                  <span className="font-poppins font-light text-sage-light">/jour</span>
                  <span className="font-poppins text-xs text-sage-light ml-2">Pressing inclus</span>
                </div>
                <a
                  href={produit.lien_reservation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mb-3"
                >
                  Réserver ce modèle
                </a>
                <Link href="/comment-ca-marche" className="font-poppins text-xs text-sage-light hover:text-sage transition-colors text-center block">
                  Comment fonctionne la livraison ? →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres modèles */}
      {autresProduits.length > 0 && (
        <section className="py-16 bg-sage-lighter/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-8">
              Autres {cat.nom.toLowerCase()} disponibles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {autresProduits.map((p) => (
                <Link
                  key={p.slug}
                  href={`/location/${cat.slug}/${p.slug}`}
                  className="card group hover:border-sage-dark transition-all duration-300"
                >
                  <div className="w-full aspect-[4/3] bg-sage-lighter/20 rounded-sm mb-4 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.nom}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-produit.jpg'
                      }}
                    />
                  </div>
                  <p className="font-poppins text-xs text-sage-light uppercase tracking-widest mb-1">{p.marque}</p>
                  <h3 className="font-poppins font-bold text-base text-sage-darkest mb-2 group-hover:text-sage transition-colors">{p.nom}</h3>
                  <p className="font-poppins font-bold text-sage-dark">{p.prix_jour}€<span className="font-normal text-sage-light text-xs">/jour</span></p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
