import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Location | Equitry',
  description: 'Conditions générales de location de matériel équestre Equitry.',
}

export default function CGL() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest mb-6">
            Conditions Générales de Location
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
              Les présentes conditions générales de location (CGL) régissent les relations contractuelles entre
              Equitry (le loueur) et toute personne physique ou morale (le locataire) souhaitant louer du matériel
              équestre via le site equitry.fr ou le site de réservation equitry-location.fr.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 2 – Matériel disponible à la location</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Equitry propose à la location : vestes de concours, tapis de selle, capteurs équestres (Equisense,
              Safe HP Ally). Le catalogue complet est disponible sur equitry-location.fr. Les disponibilités sont
              indiquées en temps réel sur le site de réservation.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 3 – Réservation et confirmation</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Toute réservation est effectuée en ligne via equitry-location.fr. La réservation est confirmée après
              validation du paiement. Un email de confirmation est envoyé au locataire. Equitry se réserve le droit
              de refuser une réservation en cas d'indisponibilité ou de raison légitime.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 4 – Tarifs et paiement</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les tarifs sont indiqués en euros TTC sur le site de réservation. Ils sont dégressifs selon la durée
              de location. Le paiement est exigible en totalité lors de la réservation, par carte bancaire via
              notre prestataire de paiement sécurisé.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 5 – Livraison et retour</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Le matériel est expédié propre et vérifié sous 48h ouvrées après confirmation de la réservation,
              en point relais ou à domicile selon le choix du locataire. Le retour s'effectue dans l'emballage
              d'origine, via l'étiquette retour fournie, dans les délais convenus.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 6 – État du matériel et responsabilité</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Le matériel est fourni en bon état. Le locataire est responsable de tout dommage causé pendant
              la durée de la location, à l'exception de l'usure normale. En cas de dommage, le locataire
              s'engage à contacter Equitry dans les 24h. Une indemnisation pourra être demandée selon la nature
              du dommage.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 7 – Annulation</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Toute annulation doit être effectuée par email à hello@equitry.fr. Les conditions de remboursement
              sont les suivantes : annulation plus de 7 jours avant le début de la location : remboursement intégral ;
              annulation entre 3 et 7 jours : remboursement à 50% ; annulation moins de 3 jours : aucun remboursement.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 8 – Dépôt de garantie</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Un dépôt de garantie peut être demandé selon le matériel loué. Il est restitué dans un délai de
              5 jours ouvrés après le retour du matériel, sous réserve de bon état.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Article 9 – Droit applicable</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Les présentes CGL sont soumises au droit français. En cas de litige, les parties s'efforceront
              de trouver une solution amiable. À défaut, les tribunaux compétents du ressort du siège social
              d'Equitry seront saisis.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-xl text-sage-darkest mb-4">Contact</h2>
            <p className="font-poppins font-light text-sage-dark leading-relaxed">
              Pour toute question relative aux présentes CGL :<br />
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
