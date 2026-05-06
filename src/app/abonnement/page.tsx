import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Abonnement équestre – Veste de concours & Pantalon Horse Pilot',
  description:
    'Abonnez-vous à partir de 29€/mois. Veste de concours à 49€/mois ou pantalon Horse Pilot à 29€/mois. Le premier abonnement équestre en France.',
}

const abonnements = [
  {
    nom: 'Abonnement Veste',
    prix: '49',
    unite: '/mois',
    tag: 'Le plus populaire',
    description: 'Accédez à une veste de concours haut de gamme chaque mois. Échangez votre taille ou votre modèle autant que vous le souhaitez.',
    inclus: [
      '1 veste de concours par mois',
      '1 échange de taille ou modèle inclus',
      'Nettoyage professionnel inclus',
      'Livraison et retour inclus',
      'Sans engagement long terme',
    ],
    highlight: true,
  },
  {
    nom: 'Abonnement Pantalon',
    prix: '29',
    unite: '/mois',
    tag: 'Nouveau',
    description: 'Portez chaque mois un pantalon Horse Pilot de qualité professionnelle, sans l\'acheter. Idéal pour varier les modèles.',
    inclus: [
      '1 pantalon Horse Pilot par mois',
      '1 échange de taille ou modèle inclus',
      'Nettoyage professionnel inclus',
      'Livraison et retour inclus',
      'Sans engagement long terme',
    ],
    highlight: false,
  },
]

const avantages = [
  {
    titre: 'Économique',
    desc: 'Une veste de concours neuve coûte 300 à 800€. Avec l\'abonnement, accédez au même niveau de qualité dès 49€/mois.',
  },
  {
    titre: 'Flexible',
    desc: 'Changez de taille, de modèle ou résiliez quand vous le souhaitez. Aucun engagement imposé.',
  },
  {
    titre: 'Pratique',
    desc: 'Livraison à domicile ou en point relais. Retour simplifié dans l\'emballage fourni. Nettoyage inclus.',
  },
  {
    titre: 'Durable',
    desc: 'En louant plutôt qu\'en achetant, vous réduisez la consommation de matières premières et l\'empreinte carbone liée à la fabrication.',
  },
]

export default function Abonnement() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Premier service en France</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-sage-darkest leading-tight mb-6">
            L'abonnement<br />équestre
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-xl text-sage-dark leading-relaxed mt-6 max-w-2xl">
            Equitry est le premier service d'abonnement à l'équipement équestre en France. 
            Accédez à du matériel haut de gamme chaque mois, sans l'acheter.
          </p>
        </div>
      </section>

      {/* Offres */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {abonnements.map((abo) => (
              <div key={abo.nom} className={`card relative ${abo.highlight ? 'border-sage ring-1 ring-sage/30' : ''}`}>
                {abo.tag && (
                  <span className="absolute -top-3 left-8 bg-sage text-cream font-poppins text-xs font-semibold px-3 py-1 tracking-wide uppercase">
                    {abo.tag}
                  </span>
                )}
                <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-2 mt-2">{abo.nom}</h2>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-poppins font-bold text-4xl text-sage-dark">{abo.prix}€</span>
                  <span className="font-poppins font-light text-sage-light">{abo.unite}</span>
                </div>
                <p className="font-poppins font-light text-sage-dark leading-relaxed mb-8">{abo.description}</p>
                <ul className="space-y-3 mb-10">
                  {abo.inclus.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-lora text-sm text-sage-dark">
                      <span className="text-sage font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={abo.highlight ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'}>
                  Je m'abonne
                </Link>
              </div>
            ))}
          </div>

          <p className="font-poppins font-light text-center text-sm text-sage-light mt-8 italic">
            * Les deux abonnements peuvent être cumulés. Contactez-nous pour un tarif groupé.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-sage-darkest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-cream">Pourquoi s'abonner ?</h2>
            <div className="w-12 h-0.5 bg-sage mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((av) => (
              <div key={av.titre}>
                <h3 className="font-poppins font-semibold text-cream text-lg mb-3">{av.titre}</h3>
                <p className="font-poppins font-light text-sm text-cream/50 leading-relaxed">{av.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="section-title text-center mb-12">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Y a-t-il un engagement minimum ?',
                r: 'Non. L\'abonnement est mensuel et résiliable à tout moment, sans frais.',
              },
              {
                q: 'Comment se passe l\'échange mensuel ?',
                r: 'Chaque mois, vous recevez votre article. Si vous souhaitez changer de taille ou de modèle, il vous suffit de nous le signaler lors de votre commande mensuelle.',
              },
              {
                q: 'La livraison est-elle incluse ?',
                r: 'Oui. La livraison aller et retour est incluse dans le prix de l\'abonnement.',
              },
              {
                q: 'Puis-je cumuler les deux abonnements ?',
                r: 'Oui, tout à fait. Contactez-nous pour un tarif groupé avantageux.',
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-sage-lighter/30 pb-6">
                <p className="font-poppins font-semibold text-sage-darkest mb-2">{item.q}</p>
                <p className="font-poppins font-light text-sage-dark text-sm leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq" className="btn-outline">Voir toutes les FAQ</Link>
          </div>
        </div>
      </section>
    </>
  )
}
