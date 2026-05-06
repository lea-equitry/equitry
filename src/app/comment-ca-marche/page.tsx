import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comment ça marche – Location équestre Equitry',
  description:
    'Comprenez comment fonctionne la location équestre Equitry : commande en ligne, livraison sous 48h, utilisation, retour simplifié. Simple et rapide.',
}

const etapes = [
  {
    num: '01',
    titre: 'Choisissez votre équipement',
    desc: 'Parcourez notre catalogue : veste de concours, tapis de selle, capteurs. Sélectionnez votre article, votre taille et vos dates de location. En cas de doute, contactez-nous — nous vous guidons.',
    detail: 'Disponible 7j/7 en ligne ou par contact direct.',
  },
  {
    num: '02',
    titre: 'Confirmez votre réservation',
    desc: 'Vous recevez une confirmation avec les détails de votre commande. Le paiement est sécurisé. Votre dossier est préparé dès réception.',
    detail: 'Confirmation par email sous 2h.',
  },
  {
    num: '03',
    titre: 'Recevez votre matériel',
    desc: 'Votre équipement est expédié propre, vérifié et emballé soigneusement. Livraison à domicile ou en point relais, partout en France, sous 48h.',
    detail: 'Livraison Colissimo ou Mondial Relay selon votre préférence.',
  },
  {
    num: '04',
    titre: 'Utilisez librement',
    desc: 'Portez votre veste au concours, analysez vos allures avec le capteur, testez le tapis de selle. Le matériel est assuré pendant la durée de location.',
    detail: 'En cas de problème, nous sommes joignables par email.',
  },
  {
    num: '05',
    titre: 'Retournez le matériel',
    desc: 'À la fin de votre location, remettez le matériel dans l\'emballage fourni et déposez-le en point relais. Pas de nettoyage à faire — c\'est inclus.',
    detail: 'L\'étiquette de retour est fournie avec votre colis.',
  },
]

const questions = [
  { q: 'Que se passe-t-il si le matériel est endommagé ?', r: 'Chaque location est couverte par une assurance dommages. En cas d\'incident accidentel, contactez-nous immédiatement. Les dommages intentionnels ou liés à une négligence grave peuvent engager la responsabilité du locataire selon nos CGV.' },
  { q: 'Comment choisir ma taille de veste ?', r: 'Un guide des tailles est disponible sur chaque fiche produit. En cas de doute, nous vous recommandons de prendre une taille au-dessus. Si la taille ne convient pas, nous échangeons le produit dans les 24h.' },
  { q: 'Puis-je prolonger ma location ?', r: 'Oui, sous réserve de disponibilité. Contactez-nous avant la fin de votre période initiale et nous ajustons la durée.' },
  { q: 'La livraison est-elle toujours incluse ?', r: 'Les frais de livraison aller sont inclus dans le prix affiché. Le retour est à votre charge pour les locations courte durée (étiquette prépayée fournie au coût de 5€), et totalement inclus dans l\'abonnement.' },
]

export default function CommentCaMarche() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Simple et rapide</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-sage-darkest leading-tight mb-6">
            Comment<br />ça marche ?
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-xl text-sage-dark leading-relaxed mt-6 max-w-2xl">
            Louer avec Equitry est aussi simple que de commander en ligne. 
            De la réservation au retour, nous gérons tout pour vous.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-0">
            {etapes.map((etape, i) => (
              <div key={etape.num} className="relative flex gap-8 pb-12">
                {/* Ligne verticale */}
                {i < etapes.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-px bg-sage-lighter/50" />
                )}
                {/* Numéro */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-sage bg-cream flex items-center justify-center">
                  <span className="font-poppins font-bold text-sage text-sm">{etape.num}</span>
                </div>
                {/* Contenu */}
                <div className="pt-2">
                  <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-3">{etape.titre}</h2>
                  <p className="font-poppins font-light text-sage-dark leading-relaxed mb-3">{etape.desc}</p>
                  <p className="font-poppins text-xs text-sage tracking-wide">{etape.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-20 bg-sage-darkest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-cream text-center mb-12">Questions pratiques</h2>
          <div className="space-y-6">
            {questions.map((item) => (
              <div key={item.q} className="border-b border-cream/10 pb-6">
                <p className="font-poppins font-semibold text-cream mb-3">{item.q}</p>
                <p className="font-poppins font-light text-sm text-cream/50 leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title mb-4">Prêt à louer ?</h2>
          <p className="font-poppins font-light text-sage-dark mb-8">Choisissez votre équipement et réservez en quelques minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/location-courte-duree" className="btn-primary">Voir les locations</Link>
            <Link href="/abonnement" className="btn-outline">Découvrir l'abonnement</Link>
          </div>
        </div>
      </section>
    </>
  )
}
