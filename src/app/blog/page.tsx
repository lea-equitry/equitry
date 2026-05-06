import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog équestre – Conseils, équipement et compétition',
  description:
    'Conseils équestres, guide d\'équipement, préparation à la compétition. Le blog Equitry pour les cavalières et cavaliers français.',
}

// Articles fictifs pour démarrer — à remplacer par vos vrais articles
const articles = [
  {
    slug: 'choisir-veste-concours-equitation',
    titre: 'Comment choisir sa veste de concours en équitation ?',
    extrait: 'Coupe, matière, couleur réglementaire... Tout ce qu\'il faut savoir pour choisir la bonne veste de concours, ou comment la louer plutôt que l\'acheter.',
    date: '2 mai 2026',
    categorie: 'Équipement',
    tempsLecture: '4 min',
  },
  {
    slug: 'location-vs-achat-equipement-equestre',
    titre: 'Location ou achat : que choisir pour son équipement équestre ?',
    extrait: 'Analyse des coûts, de la flexibilité et de l\'impact environnemental : pourquoi de plus en plus de cavaliers choisissent la location pour leur équipement.',
    date: '18 avril 2026',
    categorie: 'Conseil',
    tempsLecture: '6 min',
  },
  {
    slug: 'preparer-premier-concours-equitation',
    titre: 'Se préparer pour son premier concours d\'équitation',
    extrait: 'Check-list complète pour le cavalier débutant en compétition : matériel, tenue réglementaire, logistique et gestion du stress.',
    date: '5 avril 2026',
    categorie: 'Compétition',
    tempsLecture: '7 min',
  },
  {
    slug: 'capteur-equisense-avis-equitry',
    titre: 'Capteur Equisense : notre retour d\'expérience après 6 mois',
    extrait: 'Nous avons testé le capteur Equisense sur plusieurs profils de chevaux et de cavaliers. Voici ce que les données nous ont appris.',
    date: '22 mars 2026',
    categorie: 'Test produit',
    tempsLecture: '8 min',
  },
]

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Ressources</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-sage-darkest leading-tight mb-6">
            Le blog<br />Equitry
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-xl text-sage-dark leading-relaxed mt-6 max-w-2xl">
            Conseils équipement, préparation à la compétition, tests de produits 
            et actualités de la location équestre.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card group block hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Placeholder image */}
                <div className="w-full aspect-video bg-sage-lighter/20 border border-sage-lighter/20 mb-6 flex items-center justify-center">
                  <span className="font-poppins text-xs text-sage-light uppercase tracking-widest">Photo à venir</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="font-poppins text-xs font-semibold bg-sage-lighter/30 text-sage-dark px-2 py-1 uppercase tracking-wide">
                    {article.categorie}
                  </span>
                  <span className="font-poppins font-light text-xs text-sage-light">{article.tempsLecture} de lecture</span>
                </div>

                <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-3 group-hover:text-sage transition-colors leading-snug">
                  {article.titre}
                </h2>
                <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed mb-4">{article.extrait}</p>
                <p className="font-poppins text-xs text-sage-light">{article.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
