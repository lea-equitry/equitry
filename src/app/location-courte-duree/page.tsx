import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location courte durée – Veste de concours, tapis de selle',
  description:
    'Louez votre veste de concours dès 30€/jour ou votre tapis de selle dès 20€/jour. Tarifs dégressifs, livraison partout en France sous 48h.',
}

const produits = [
  {
    nom: 'Veste de concours',
    prix: 'À partir de 30€/jour',
    description: 'Vestes de concours haut de gamme, toutes tailles disponibles. Idéal pour un concours ou une présentation.',
    details: ['Tailles XS à XL disponibles', 'Nettoyage inclus', 'Livraison sous 48h', 'Retour en point relais ou domicile'],
    tarifs: [
      { duree: '1 jour', prix: '30€' },
      { duree: '2 jours', prix: '50€' },
      { duree: '3 jours', prix: '65€' },
    ],
  },
  {
    nom: 'Tapis de selle',
    prix: 'À partir de 20€/jour',
    description: 'Tapis de selle de qualité pour la compétition ou l\'entraînement. Plusieurs modèles disponibles.',
    details: ['Plusieurs modèles disponibles', 'Nettoyage inclus', 'Livraison sous 48h', 'Retour en point relais ou domicile'],
    tarifs: [
      { duree: '1 jour', prix: '20€' },
      { duree: '2 jours', prix: '35€' },
      { duree: '3 jours', prix: '45€' },
    ],
  },
  {
    nom: 'Capteur de rênes',
    prix: '100€/jour',
    description: 'Capteur de tension des rênes pour analyser votre contact avec le cheval en temps réel.',
    details: ['Données en temps réel', 'Compatible toutes brides', 'Guide d\'utilisation fourni', 'Support technique inclus'],
    tarifs: [
      { duree: '1 jour', prix: '100€' },
      { duree: 'Semaine', prix: 'Nous contacter' },
    ],
  },
  {
    nom: 'Capteur Equisense',
    prix: '30€/semaine',
    description: 'Analysez les allures, les sauts et la condition physique de votre cheval grâce au capteur Equisense.',
    details: ['Application mobile incluse', 'Analyse des allures', 'Comptage des sauts', 'Compatible toutes disciplines'],
    tarifs: [
      { duree: '1 semaine', prix: '30€' },
      { duree: '2 semaines', prix: '50€' },
    ],
  },
]

export default function LocationCourteDuree() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Location à la journée</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-sage-darkest leading-tight mb-6">
            Location<br />courte durée
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-xl text-sage-dark leading-relaxed mt-6 max-w-2xl">
            Louez votre équipement équestre pour 1 à 3 jours. Tarifs dégressifs, livraison partout en France, 
            retour simplifié en point relais ou à domicile.
          </p>
        </div>
      </section>

      {/* Produits */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {produits.map((produit) => (
              <div key={produit.nom} className="card">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-1">{produit.nom}</h2>
                    <p className="font-poppins font-semibold text-sage text-lg">{produit.prix}</p>
                  </div>
                </div>
                <p className="font-poppins font-light text-sage-dark leading-relaxed mb-6">{produit.description}</p>

                {/* Tarifs */}
                <div className="bg-cream border border-sage-lighter/30 rounded-sm p-4 mb-6">
                  <p className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage mb-3">Tarifs</p>
                  <div className="space-y-2">
                    {produit.tarifs.map((t) => (
                      <div key={t.duree} className="flex justify-between items-center">
                        <span className="font-poppins font-light text-sm text-sage-dark">{t.duree}</span>
                        <span className="font-poppins font-semibold text-sage-darkest">{t.prix}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclus */}
                <ul className="space-y-2 mb-8">
                  {produit.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 font-lora text-sm text-sage-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary w-full text-center">
                  Réserver ce produit
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info livraison */}
      <section className="py-16 bg-sage-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '📦', titre: 'Livraison sous 48h', desc: 'Partout en France, en point relais ou à domicile.' },
              { icon: '✨', titre: 'Matériel nettoyé', desc: 'Chaque article est nettoyé et vérifié avant chaque location.' },
              { icon: '↩️', titre: 'Retour simplifié', desc: 'Renvoyez l\'emballage fourni, sans frais supplémentaires.' },
            ].map((item) => (
              <div key={item.titre}>
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-poppins font-semibold text-cream mb-2">{item.titre}</h3>
                <p className="font-poppins font-light text-sm text-cream/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title mb-4">Une question sur votre location ?</h2>
          <p className="font-poppins font-light text-sage-dark mb-8">Nous vous répondons rapidement pour trouver le matériel adapté à votre besoin.</p>
          <Link href="/contact" className="btn-primary">Nous contacter</Link>
        </div>
      </section>
    </>
  )
}
