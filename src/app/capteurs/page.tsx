import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location capteurs équestres – Safe HP Ally & Equisense',
  description:
    'Louez les capteurs Safe HP Ally (rênes, pression de selle) et Equisense sans les acheter. Analysez votre matériel, vos allures, votre contact. Location partout en France.',
}

const specsAlly = [
  { icon: '🎯', titre: 'Précision chirurgicale', desc: 'Capteur de rênes au 10g près, nappe de pression à 1024 points.' },
  { icon: '⚡', titre: 'Temps réel', desc: 'Latence ultra-faible (<100ms) pour un retour d\'information instantané.' },
  { icon: '🔋', titre: 'Autonomie terrain', desc: "Jusqu'à 10h d'enregistrement pour couvrir vos journées de concours." },
  { icon: '☁️', titre: 'Écosystème unifié', desc: 'Une seule application cloud pour centraliser, analyser et partager vos données (RGPD, hébergement Europe).' },
  { icon: '🇫🇷', titre: 'Support France', desc: 'Équipes basées en France, disponibles pour vous accompagner dans l\'interprétation de vos données.' },
]

export default function Capteurs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cream to-sage-lighter/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">
            Location de capteurs équestres
          </p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-sage-darkest leading-tight mb-6">
            Testez avant<br />d'acheter
          </h1>
          <div className="equitry-divider" />
          <p className="font-poppins font-light text-xl text-sage-dark leading-relaxed mt-6 max-w-2xl">
            Safe HP Ally, Equisense — louez les meilleurs capteurs équestres du marché
            sans engagement d'achat. Analysez, progressez, décidez en connaissance de cause.
          </p>
        </div>
      </section>

      {/* ======== SAFE HP ALLY ======== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">

          {/* En-tête produit */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">
                Location capteur · à partir de 100€/jour
              </p>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-sage-darkest leading-tight mb-6">
                Safe HP Ally
              </h2>
              <div className="equitry-divider" />
              <p className="font-poppins font-semibold text-lg text-sage-dark leading-relaxed mt-6 mb-4">
                La loupe qui adapte votre matériel au bien-être de votre cheval.
              </p>
              <p className="font-poppins font-light text-sage-dark leading-relaxed mb-8">
                Chez SAFE HP, la technologie ne remplace pas l'humain : elle l'éclaire pour mieux servir le cheval.
                SAFE HP Ally agit comme une loupe numérique posée sur votre relation et votre matériel —
                pour rendre visible l'invisible et permettre l'ajustement parfait.
              </p>
              <Link href="/contact" className="btn-primary">
                Réserver ce capteur
              </Link>
            </div>
            <div className="bg-sage-lighter/20 border border-sage-lighter/30 rounded-sm aspect-video flex items-center justify-center">
              <p className="font-poppins text-xs text-sage-light uppercase tracking-widest">Photo Safe HP Ally à venir</p>
            </div>
          </div>

          {/* Ce que révèle Ally */}
          <div className="bg-sage-darkest rounded-sm p-12 mb-16">
            <h3 className="font-poppins font-bold text-2xl text-cream mb-10 text-center">
              Une chaîne de valeur vertueuse
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  titre: 'Pour le cavalier',
                  desc: 'Vous validez vos intuitions et affinez vos réglages avec une certitude scientifique. Votre ressenti est confirmé, guidé, jamais jugé.',
                },
                {
                  titre: 'Pour le cheval',
                  desc: 'Un matériel parfaitement adapté signifie l\'absence de contraintes inutiles, de points de compression ou de confusions dans les aides.',
                },
                {
                  titre: 'Pour le couple',
                  desc: 'Libéré de ses inconforts, le cheval retrouve sa confiance, sa liberté de mouvement et sa disponibilité mentale.',
                },
              ].map((item) => (
                <div key={item.titre} className="text-center">
                  <h4 className="font-poppins font-semibold text-sage-lighter text-xs uppercase tracking-widest mb-3">{item.titre}</h4>
                  <p className="font-poppins font-light text-cream/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capteur de rênes */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-3">Capteur inclus dans la gamme Ally</p>
                <h3 className="font-poppins font-bold text-3xl text-sage-darkest mb-4">
                  Capteur de tension de rênes
                </h3>
                <p className="font-poppins font-light text-lg text-sage-dark mb-8 italic">
                  La fluidité de votre communication, révélée.
                </p>
                <div className="space-y-5 mb-8">
                  {[
                    { emoji: '🎯', label: 'Symétrie des aides', desc: 'Visualisez l\'équilibre entre vos deux mains en temps réel.' },
                    { emoji: '🤲', label: 'Précision 10g', desc: 'Détectez les micro-tensions invisibles au ressenti grâce à la technologie Phyling.' },
                    { emoji: '🐴', label: 'Respect du cheval', desc: 'Évitez les tractions asymétriques pour préserver la bouche.' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                      <div>
                        <p className="font-poppins font-semibold text-sage-darkest text-sm mb-1">{item.label}</p>
                        <p className="font-poppins font-light text-sage-dark text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-cream border border-sage-lighter/30 p-6">
                  <p className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage mb-4">Tarifs de location</p>
                  <div className="space-y-2">
                    {[
                      { duree: '1 jour', prix: '100€' },
                      { duree: 'Semaine', prix: 'Nous contacter' },
                    ].map((t) => (
                      <div key={t.duree} className="flex justify-between items-center">
                        <span className="font-poppins font-light text-sm text-sage-dark">{t.duree}</span>
                        <span className="font-poppins font-semibold text-sage-darkest">{t.prix}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Citation + partenariat */}
              <div className="space-y-8">
                <div className="bg-sage-lighter/10 border-l-4 border-sage p-8">
                  <blockquote className="font-lora italic text-sage-dark text-lg leading-relaxed mb-6">
                    "Les capteurs SAFE HP Ally ne remplacent pas mon ressenti, il le confirme.
                    C'est comme avoir un deuxième avis instantané qui me permet d'ajuster le matériel
                    mais aussi ma main ou ma position avec une justesse incroyable."
                  </blockquote>
                  <cite className="font-poppins font-semibold text-sage-darkest text-sm not-italic">
                    Alexandre Ayache — Cavalier Olympique de Dressage
                  </cite>
                </div>

                <div className="card">
                  <p className="font-poppins font-semibold text-sage-darkest text-xs uppercase tracking-widest mb-4">
                    Une exigence partagée
                  </p>
                  <p className="font-poppins font-light text-sage-dark text-sm leading-relaxed">
                    Depuis 2021, Alexandre Ayache utilise les solutions SAFE HP pour le confort de ses chevaux.
                    La gamme Ally est née de cette question commune : <em>"Comment objectiver ce que je ressens
                    pour progresser encore ?"</em> Testée et approuvée au plus haut niveau, elle est aujourd'hui
                    accessible à tous les cavaliers, amateurs comme professionnels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specs techniques */}
          <div>
            <h3 className="font-poppins font-bold text-2xl text-sage-darkest mb-4 text-center">
              Une technologie de pointe, discrète et robuste
            </h3>
            <p className="font-poppins font-light text-sage-dark text-center max-w-2xl mx-auto mb-10">
              Développée avec Phyling et Texisense, la gamme Ally concilie précision scientifique et ergonomie terrain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specsAlly.map((spec) => (
                <div key={spec.titre} className="card">
                  <span className="text-3xl block mb-4">{spec.icon}</span>
                  <h4 className="font-poppins font-semibold text-sage-darkest mb-2">{spec.titre}</h4>
                  <p className="font-poppins font-light text-sage-dark text-sm leading-relaxed">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur visuel */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-sage-lighter/40" />
      </div>

      {/* ======== EQUISENSE ======== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-sage-lighter/20 border border-sage-lighter/30 rounded-sm aspect-video flex items-center justify-center">
              <p className="font-poppins text-xs text-sage-light uppercase tracking-widest">Photo Equisense à venir</p>
            </div>
            <div>
              <p className="font-poppins text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-4">
                Location capteur · 30€/semaine
              </p>
              <h2 className="font-poppins font-bold text-4xl text-sage-darkest leading-tight mb-6">
                Equisense
              </h2>
              <div className="equitry-divider" />
              <p className="font-poppins font-light text-lg text-sage-dark leading-relaxed mt-6 mb-8">
                Analysez les allures, la régularité et les performances de votre cheval au fil des séances.
                Un outil de suivi objectif, fixé sur la sangle, connecté à une application mobile intuitive.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Analyse des allures (pas, trot, galop)',
                  'Comptage et analyse des sauts',
                  'Suivi de la condition physique',
                  'Application mobile incluse',
                  'Compatible toutes disciplines',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                    <span className="font-poppins font-light text-sm text-sage-dark">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cream border border-sage-lighter/30 p-6 mb-8">
                <p className="font-poppins text-xs font-semibold tracking-widest uppercase text-sage mb-4">Tarifs de location</p>
                <div className="space-y-2">
                  {[
                    { duree: '1 semaine', prix: '30€' },
                    { duree: '2 semaines', prix: '50€' },
                    { duree: '1 mois', prix: 'Nous contacter' },
                  ].map((t) => (
                    <div key={t.duree} className="flex justify-between items-center">
                      <span className="font-poppins font-light text-sm text-sage-dark">{t.duree}</span>
                      <span className="font-poppins font-semibold text-sage-darkest">{t.prix}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-primary">
                Réserver ce capteur
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi louer */}
      <section className="py-20 bg-sage-darkest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-poppins font-bold text-4xl text-cream mb-6">Pourquoi louer plutôt qu'acheter ?</h2>
          <p className="font-poppins font-light text-cream/60 leading-relaxed mb-12 text-lg max-w-2xl mx-auto">
            Un capteur équestre représente un investissement de 300 à 600€.
            La location vous permet de le tester sur votre cheval, dans votre pratique réelle,
            avant de décider si l'achat est pertinent pour vous.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { titre: 'Zéro risque', desc: 'Testez le capteur sur votre cheval avant tout investissement.' },
              { titre: 'Immédiat', desc: 'Recevez le capteur sous 48h, utilisez-le dès votre prochaine séance.' },
              { titre: 'Accompagné', desc: "Nous vous guidons sur l'utilisation et l'interprétation des données." },
            ].map((item) => (
              <div key={item.titre}>
                <h3 className="font-poppins font-semibold text-cream text-lg mb-3">{item.titre}</h3>
                <p className="font-poppins font-light text-sm text-cream/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title mb-4">Prêt à analyser votre pratique ?</h2>
          <p className="font-poppins font-light text-sage-dark mb-8">
            Contactez-nous pour vérifier la disponibilité et réserver votre capteur.
          </p>
          <Link href="/contact" className="btn-primary">Réserver un capteur</Link>
        </div>
      </section>
    </>
  )
}
