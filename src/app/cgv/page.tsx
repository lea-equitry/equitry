import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Equitry',
  description: 'Conditions générales de vente Equitry – abonnements et vente de matériel équestre.',
}

export default function CGV() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest mb-6">
            Conditions Générales de Vente
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-sage-light mt-6">En vigueur à compter du 1er janvier 2026</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 1 – Objet</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les présentes conditions générales de vente (CGV) s'appliquent à toutes les ventes conclues
              entre Equitry et ses clients, notamment les abonnements mensuels et la vente de matériel
              équestre d'occasion.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 2 – Abonnements</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Equitry propose des abonnements mensuels sans engagement : abonnement Veste de concours
              à 49€/mois et abonnement Pantalon Horse Pilot à 29€/mois. L'abonnement est souscrit en ligne
              et reconductible tacitement chaque mois. Le client peut résilier à tout moment, sans frais,
              en contactant hello@equitry.fr avant la date de renouvellement.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 3 – Prix et paiement</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les prix sont indiqués en euros TTC. Le paiement est effectué par prélèvement mensuel automatique
              via notre prestataire de paiement sécurisé. Equitry se réserve le droit de modifier ses tarifs
              avec un préavis de 30 jours.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 4 – Livraison</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les articles sont expédiés propres et vérifiés sous 48h ouvrées après souscription ou renouvellement
              de l'abonnement, en point relais ou à domicile selon le choix du client. Les frais de livraison
              sont inclus dans le prix de l'abonnement.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 5 – Droit de rétractation</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Conformément aux articles L.221-18 et suivants du Code de la consommation, le client dispose
              d'un délai de 14 jours à compter de la souscription pour exercer son droit de rétractation,
              sans motif ni pénalité, en contactant hello@equitry.fr.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 6 – Retour des articles</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              À la fin de chaque période d'abonnement, le client retourne l'article dans l'emballage fourni,
              via l'étiquette retour incluse. Le retour est inclus dans le prix de l'abonnement. Tout article
              non retourné dans les délais impartis pourra faire l'objet d'une facturation complémentaire.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 7 – Garanties et réclamations</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              En cas de problème avec un article reçu (défaut, taille incorrecte), le client dispose de
              48h pour contacter Equitry à hello@equitry.fr. Equitry s'engage à trouver une solution
              dans les meilleurs délais.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 8 – Protection des données</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les données personnelles collectées lors de la souscription sont utilisées uniquement pour
              la gestion de l'abonnement et la livraison. Elles ne sont pas cédées à des tiers. Conformément
              au RGPD, vous disposez d'un droit d'accès et de suppression en contactant hello@equitry.fr.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 9 – Droit applicable</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige non résolu à l'amiable,
              le client peut recourir à la médiation de la consommation ou saisir les juridictions compétentes.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Contact</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Pour toute question relative aux présentes CGV :<br />
              <a href="mailto:hello@equitry.fr" className="text-sage hover:underline">hello@equitry.fr</a>
            </p>
          </div>

          <div className="pt-4">
            <Link href="/" className="font-poppins text-sm text-sage hover:text-sage-dark transition-colors">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
