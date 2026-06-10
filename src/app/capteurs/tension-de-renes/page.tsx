import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location capteur tension de rênes Safe HP Ally | Equitry',
  description:
    'Louez le capteur de tension de rênes Safe HP Ally. Analysez votre contact avec la bouche du cheval, recevez un rapport PDF personnalisé. 100€/jour.',
}

export default function TensionDeRenesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-poppins text-sage-light mb-6">
            <Link href="/capteurs" className="hover:text-sage transition-colors">Capteurs</Link>
            <span>›</span>
            <span className="text-sage-dark">Tension de rênes</span>
          </div>
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">Safe HP Ally</p>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-sage-darkest leading-tight mb-4">
            Capteur de tension de rênes
          </h1>
          <p className="font-poppins font-light text-lg text-sage-dark max-w-2xl leading-relaxed">
            Mesurez en temps réel la tension exercée sur les rênes de votre cheval. Un outil pédagogique unique pour objectiver votre contact et progresser.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div className="w-full aspect-[4/3] bg-sage-lighter/20 rounded-sm overflow-hidden">
              <img
                src="/capteurs/safe-hp-ally.jpg"
                alt="Capteur Safe HP Ally tension de rênes"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <ul className="space-y-3 mb-8">
                {[
                  'Mesure en temps réel de la tension sur chaque rêne',
                  'Rapport PDF personnalisé inclus dans la location',
                  'Compatible toutes disciplines (CSO, dressage, hunter)',
                  'Utilisable seul ou avec un entraîneur',
                  'Installation rapide sur vos rênes existantes',
                  'Données exploitables immédiatement',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 font-poppins text-sm text-sage-dark">
                    <span className="text-sage mt-0.5 flex-none">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-sage-lighter/10 border border-sage-lighter/30 rounded-sm p-6 mb-6">
                <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-sage-darkest mb-3">
                  Ce que vous recevez
                </p>
                <ul className="space-y-2 font-poppins text-sm text-sage-dark font-light">
                  <li>→ Le capteur Safe HP Ally installé et configuré</li>
                  <li>→ Un rapport PDF d'analyse de votre séance</li>
                  <li>→ Un accompagnement par email pour l'interprétation</li>
                  <li>→ Une notice d'utilisation détaillée</li>
                </ul>
              </div>

              <div className="border-t border-sage-lighter/30 pt-6">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-poppins font-bold text-3xl text-sage-darkest">100€</span>
                  <span className="font-poppins font-light text-sage-light">/jour</span>
                </div>
                <a
                  href="https://equitry-location.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mb-3"
                >
                  Réserver le capteur
                </a>
                <Link href="/contact" className="font-poppins text-xs text-sage-light hover:text-sage transition-colors text-center block">
                  Une question ? Contactez-nous →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-sage-lighter/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-poppins font-bold text-2xl text-sage-darkest mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Faut-il des rênes spéciales ?',
                r: 'Non, le capteur Safe HP Ally est compatible avec toutes les rênes standard. L\'installation prend moins de 5 minutes.',
              },
              {
                q: 'Peut-on utiliser le capteur en compétition ?',
                r: 'Le capteur est prévu pour les séances d\'entraînement. Il n\'est pas homologué pour une utilisation en compétition officielle.',
              },
              {
                q: 'Comment recevoir le rapport ?',
                r: 'Le rapport PDF est généré après votre séance et envoyé par email dans les 24h. Il inclut les données brutes et une analyse pédagogique.',
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-sage-lighter/30 pb-6">
                <h3 className="font-poppins font-semibold text-sage-darkest mb-2">{item.q}</h3>
                <p className="font-poppins font-light text-sm text-sage-dark leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
