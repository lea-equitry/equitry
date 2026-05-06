import type { Metadata } from 'next'
import Link from 'next/link'

// Dans une version avancée, ces données viendraient de fichiers MDX ou d'un CMS
// Pour l'instant, on affiche une page exemple
export const metadata: Metadata = {
  title: 'Article de blog | Equitry',
  description: 'Le blog Equitry – conseils équestres et guide d\'équipement.',
}

export default function ArticleBlog({ params }: { params: { slug: string } }) {
  return (
    <>
      <section className="pt-32 pb-8 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="font-poppins text-xs text-sage hover:text-sage-dark transition-colors tracking-wide uppercase flex items-center gap-2 mb-8">
            ← Retour au blog
          </Link>
          <span className="font-poppins text-xs font-semibold bg-sage-lighter/30 text-sage-dark px-2 py-1 uppercase tracking-wide mb-4 inline-block">
            Article
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-sage-darkest leading-tight mt-4 mb-6">
            Titre de l'article
          </h1>
          <p className="font-poppins font-light text-sage-light">Publié le — par Equitry</p>
          <div className="equitry-divider mt-6" />
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-equitry">
            <p className="font-poppins font-light text-sage-dark text-lg leading-relaxed mb-6">
              Cet espace est prévu pour recevoir le contenu de l'article. 
              Les articles seront rédigés en Markdown et intégrés dynamiquement.
            </p>
            <p className="font-poppins font-light text-sage-dark leading-relaxed mb-6">
              Slug de l'article : <code className="bg-sage-lighter/20 px-2 py-1 font-mono text-sm">{params.slug}</code>
            </p>
          </div>

          <div className="border-t border-sage-lighter/30 mt-16 pt-12 text-center">
            <h3 className="font-poppins font-bold text-2xl text-sage-darkest mb-4">Prêt à louer votre équipement ?</h3>
            <p className="font-poppins font-light text-sage-dark mb-8">Vestes, tapis de selle, capteurs — livraison partout en France.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/location-courte-duree" className="btn-primary">Voir les locations</Link>
              <Link href="/abonnement" className="btn-outline">L'abonnement</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
