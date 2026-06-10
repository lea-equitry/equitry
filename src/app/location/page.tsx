import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/data/catalogue'

export const metadata: Metadata = {
  title: 'Location matériel équestre | Vestes, tapis, bonnets – Equitry',
  description:
    'Louez votre équipement équestre pour vos concours. Vestes de concours, tapis de selle, bonnets cheval — à partir de 10€/jour, livraison partout en France.',
}

export default function LocationPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">
            Location équestre
          </p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-sage-darkest leading-tight mb-6 max-w-3xl">
            Louez votre équipement de concours
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed mb-8">
            Accédez aux meilleures marques équestres sans investissement. Vestes Horse Pilot, Le Sabotier, tapis Cavalleria Toscana, bonnets Oxxer — livrés propres sous 48h, partout en France.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-poppins text-sage-dark">
            <span className="flex items-center gap-2">✓ Pressing inclus</span>
            <span className="flex items-center gap-2">✓ Livraison 48h</span>
            <span className="flex items-center gap-2">✓ Domicile ou point relais</span>
            <span className="flex items-center gap-2">✓ Retour simple</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/location/${cat.slug}`}
                className="card group hover:border-sage-dark transition-all duration-300"
              >
                <span className="text-4xl mb-5 block">{cat.icon}</span>
                <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-3 group-hover:text-sage transition-colors">
                  {cat.nom}
                </h2>
                <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed mb-5">
                  {cat.description.slice(0, 100)}...
                </p>
                <p className="font-poppins text-xs text-sage-light mb-6">
                  {cat.produits.length} modèle{cat.produits.length > 1 ? 's' : ''} disponible{cat.produits.length > 1 ? 's' : ''}
                </p>
                <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage-dark border-b border-sage pb-1">
                  Voir les modèles →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sage-darkest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-cream mb-6">
            Vous avez besoin d'aide pour choisir ?
          </h2>
          <p className="font-poppins font-light text-cream/70 mb-8 text-lg">
            Contactez-nous — nous vous guidons vers la taille et le modèle adaptés à votre morphologie et à vos concours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://equitry-location.fr" className="btn-primary">
              Réserver maintenant
            </a>
            <Link href="/contact" className="btn-outline border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
