import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact – Equitry',
  description:
    'Contactez Equitry pour toute question sur la location de matériel équestre. Réponse sous 24h.',
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Parlons-nous</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-sage-darkest leading-tight mb-6">
            Contact
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-xl text-sage-dark leading-relaxed mt-6 max-w-2xl">
            Une question sur votre location, votre abonnement ou nos capteurs ? 
            Nous vous répondons sous 24h.
          </p>
        </div>
      </section>

      {/* Formulaire + infos */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulaire */}
          <div>
            <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-8">Envoyez-nous un message</h2>
            <form
              action="https://formspree.io/f/xgodyrvw"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage block mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    className="w-full border border-sage-lighter/50 bg-white px-4 py-3 font-lora text-sage-darkest focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage block mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    className="w-full border border-sage-lighter/50 bg-white px-4 py-3 font-lora text-sage-darkest focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-sage-lighter/50 bg-white px-4 py-3 font-lora text-sage-darkest focus:outline-none focus:border-sage transition-colors"
                />
              </div>

              <div>
                <label className="font-poppins text-xs font-semibold tracking-widets uppercase text-sage block mb-2">
                  Sujet
                </label>
                <select
                  name="sujet"
                  className="w-full border border-sage-lighter/50 bg-white px-4 py-3 font-lora text-sage-darkest focus:outline-none focus:border-sage transition-colors"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="location">Location courte durée</option>
                  <option value="abonnement">Abonnement</option>
                  <option value="capteurs">Capteurs</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full border border-sage-lighter/50 bg-white px-4 py-3 font-lora text-sage-darkest focus:outline-none focus:border-sage transition-colors resize-none"
                  placeholder="Décrivez votre besoin, votre taille, vos dates..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Infos */}
          <div className="space-y-12">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-8">Informations</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-poppins font-semibold text-sage-darkest mb-1">Email</p>
                    <a href="mailto:contact@equitry.fr" className="font-poppins font-light text-sage hover:text-sage-dark transition-colors">
                      contact@equitry.fr
                    </a>
                    <p className="font-poppins font-light text-xs text-sage-light mt-1">Réponse sous 24h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-poppins font-semibold text-sage-darkest mb-1">Zone de départ</p>
                    <p className="font-poppins font-light text-sage-dark">Région PACA</p>
                    <p className="font-poppins font-light text-xs text-sage-light mt-1">Livraison nationale via transporteurs partenaires</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-poppins font-semibold text-sage-darkest mb-1">Délai de réponse</p>
                    <p className="font-poppins font-light text-sage-dark">24h en semaine</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sage-lighter/20 border border-sage-lighter/30 p-8">
              <p className="font-poppins font-semibold text-sage-darkest mb-3">Besoin urgent ?</p>
              <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed">
                Pour une réservation dans les 48h ou une question urgente, 
                précisez-le dans votre message — nous traitons ces demandes en priorité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
