import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ – Questions fréquentes | Equitry',
  description:
    'Toutes les réponses à vos questions sur la location de matériel équestre Equitry : livraison, tailles, retour, abonnement, capteurs.',
}

const categories = [
  {
    titre: 'Location courte durée',
    questions: [
      {
        q: 'Quels produits sont disponibles à la location ?',
        r: 'Vestes de concours, tapis de selle, capteur Equisense et capteur de rênes. Le catalogue évolue régulièrement — contactez-nous si vous cherchez un produit spécifique.',
      },
      {
        q: 'Quelle est la durée minimum de location ?',
        r: 'La durée minimum est d\'1 jour. Nos tarifs sont dégressifs : plus la durée est longue, plus le prix au jour est avantageux.',
      },
      {
        q: 'Comment choisir ma taille ?',
        r: 'Chaque fiche produit inclut un guide des tailles détaillé. En cas de doute, contactez-nous directement — nous vous aidons à choisir la bonne taille selon vos mensurations.',
      },
      {
        q: 'Puis-je prolonger ma location ?',
        r: 'Oui, sous réserve de disponibilité. Contactez-nous avant la fin de votre période initiale.',
      },
    ],
  },
  {
    titre: 'Livraison et retour',
    questions: [
      {
        q: 'Dans quel délai est livré mon matériel ?',
        r: 'Sous 48h ouvrées après confirmation de votre commande. Livraison à domicile ou en point relais selon votre choix.',
      },
      {
        q: 'La livraison est-elle incluse dans le prix ?',
        r: 'La livraison aller est incluse dans tous nos tarifs. Le retour est inclus pour l\'abonnement. Pour la location courte durée, une étiquette retour prépayée est fournie (5€ déduits du dépôt de garantie).',
      },
      {
        q: 'Comment se passe le retour ?',
        r: 'Remettez le matériel dans l\'emballage d\'origine, collez l\'étiquette retour fournie, et déposez le colis en point relais. Pas de nettoyage à faire — c\'est inclus dans le prix.',
      },
      {
        q: 'Livrez-vous dans toute la France ?',
        r: 'Oui, partout en France métropolitaine. Pour les DOM-TOM, contactez-nous pour un devis spécifique.',
      },
    ],
  },
  {
    titre: 'Abonnement',
    questions: [
      {
        q: 'Comment fonctionne l\'abonnement ?',
        r: 'Vous choisissez votre formule (veste à 49€/mois ou pantalon à 29€/mois), vous recevez votre article chaque mois. Vous pouvez changer de taille ou de modèle d\'un mois à l\'autre.',
      },
      {
        q: 'Y a-t-il un engagement ?',
        r: 'Non. L\'abonnement est mensuel, résiliable à tout moment sans frais ni préavis.',
      },
      {
        q: 'Quand suis-je débité ?',
        r: 'Le prélèvement est effectué le même jour chaque mois, à date anniversaire de votre souscription.',
      },
      {
        q: 'Puis-je cumuler les deux formules ?',
        r: 'Oui. Contactez-nous pour un tarif groupé avantageux.',
      },
    ],
  },
  {
    titre: 'Matériel et sécurité',
    questions: [
      {
        q: 'Le matériel est-il nettoyé entre chaque location ?',
        r: 'Oui, systématiquement. Chaque article est nettoyé et vérifié avant d\'être expédié à un nouveau locataire.',
      },
      {
        q: 'Que se passe-t-il en cas de dommage ?',
        r: 'En cas d\'incident accidentel, contactez-nous immédiatement. Les dommages d\'usure normale sont couverts. Les dommages intentionnels ou liés à une négligence grave peuvent engager votre responsabilité selon nos CGV.',
      },
      {
        q: 'Y a-t-il un dépôt de garantie ?',
        r: 'Oui, un dépôt de garantie est demandé selon le produit loué. Il est restitué dans les 5 jours ouvrés après le retour du matériel en bon état.',
      },
    ],
  },
]

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Aide</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-sage-darkest leading-tight mb-6">
            Questions<br />fréquentes
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-xl text-sage-dark leading-relaxed mt-6 max-w-2xl">
            Vous ne trouvez pas la réponse à votre question ? 
            <Link href="/contact" className="text-sage underline ml-1">Contactez-nous directement.</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {categories.map((cat) => (
            <div key={cat.titre}>
              <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-8 pb-4 border-b border-sage-lighter/30">
                {cat.titre}
              </h2>
              <div className="space-y-6">
                {cat.questions.map((item) => (
                  <div key={item.q} className="group">
                    <p className="font-poppins font-semibold text-sage-darkest mb-2 leading-snug">{item.q}</p>
                    <p className="font-poppins font-light text-sage-dark text-sm leading-relaxed">{item.r}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA contact */}
      <section className="py-20 bg-sage-darkest text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-3xl text-cream mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="font-poppins font-light text-cream/60 mb-8">Notre équipe répond sous 24h par email.</p>
          <Link href="/contact" className="btn-outline border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
