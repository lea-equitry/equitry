export type Condition = 'neuf' | 'tres-bon' | 'bon'

export interface Produit {
  slug: string
  nom: string
  marque: string
  categorieSlug: string
  description: string
  points_cles: string[]
  prix_jour: number
  prix_occasion?: Record<Condition, number>
  tailles?: string[]
  image: string
  lien_reservation: string
  seo_title: string
  seo_description: string
}

export interface Categorie {
  slug: string
  nom: string
  nom_singulier: string
  description: string
  icon: string
  produits: Produit[]
}

export const categories: Categorie[] = [
  {
    slug: 'veste-de-concours',
    nom: 'Vestes de concours',
    nom_singulier: 'Veste de concours',
    description: 'Louez une veste de concours d\'équitation haut de gamme pour votre compétition. Disponible du XS au XL, livrée propre et prête à porter.',
    icon: '🏇',
    produits: [
      {
        slug: 'horse-pilot-aerotech',
        nom: 'Horse Pilot Aerotech',
        marque: 'Horse Pilot',
        categorieSlug: 'veste-de-concours',
        description: 'La veste Horse Pilot Aerotech est une référence en équitation de compétition. Coupe ajustée, tissu technique respirant, homologuée FEI. Idéale pour le saut d\'obstacles et le dressage.',
        points_cles: [
          'Tissu technique haute respirabilité',
          'Coupe ajustée et confortable',
          'Homologuée FEI',
          'Disponible du XS au XL',
          'Livrée nettoyée et repassée',
        ],
        prix_jour: 30,
        prix_occasion: { neuf: 180, 'tres-bon': 130, bon: 90 },
        tailles: ['XS', 'S', 'M', 'L', 'XL'],
        image: '/produits/horse-pilot-aerotech.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location veste Horse Pilot Aerotech | Equitry',
        seo_description: 'Louez la veste Horse Pilot Aerotech à partir de 30€/jour. Livrée propre, tailles XS à XL. Réservation en ligne, livraison partout en France.',
      },
      {
        slug: 'horse-pilot-aeromesh',
        nom: 'Horse Pilot Aeromesh',
        marque: 'Horse Pilot',
        categorieSlug: 'veste-de-concours',
        description: 'La Horse Pilot Aeromesh allie esthétique et performance. Sa matière mesh ultra-légère garantit un confort optimal lors des journées de concours.',
        points_cles: [
          'Matière mesh ultra-légère',
          'Ventilation maximale',
          'Coupe moderne et élégante',
          'Homologuée pour la compétition',
          'Livrée nettoyée et repassée',
        ],
        prix_jour: 30,
        prix_occasion: { neuf: 175, 'tres-bon': 125, bon: 85 },
        tailles: ['XS', 'S', 'M', 'L', 'XL'],
        image: '/produits/horse-pilot-aeromesh.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location veste Horse Pilot Aeromesh | Equitry',
        seo_description: 'Louez la veste Horse Pilot Aeromesh à partir de 30€/jour. Ultra-légère, homologuée compétition. Livraison en France sous 48h.',
      },
      {
        slug: 'horse-pilot-aeromade',
        nom: 'Horse Pilot Aeromade',
        marque: 'Horse Pilot',
        categorieSlug: 'veste-de-concours',
        description: 'La Horse Pilot Aeromade est la veste technique premium de la marque. Conçue pour les cavaliers exigeants, elle offre une liberté de mouvement incomparable.',
        points_cles: [
          'Matière premium haute performance',
          'Liberté de mouvement maximale',
          'Finitions soignées',
          'Homologuée FEI',
          'Livrée nettoyée et repassée',
        ],
        prix_jour: 35,
        prix_occasion: { neuf: 200, 'tres-bon': 150, bon: 100 },
        tailles: ['XS', 'S', 'M', 'L', 'XL'],
        image: '/produits/horse-pilot-aeromade.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location veste Horse Pilot Aeromade | Equitry',
        seo_description: 'Louez la veste Horse Pilot Aeromade à partir de 35€/jour. Veste premium homologuée FEI. Livraison partout en France.',
      },
      {
        slug: 'le-sabotier-colette',
        nom: 'Le Sabotier Colette',
        marque: 'Le Sabotier',
        categorieSlug: 'veste-de-concours',
        description: 'La veste Colette de Le Sabotier est une élégante veste de concours à la coupe française raffinée. Parfaite pour le dressage et le hunter.',
        points_cles: [
          'Coupe française élégante',
          'Tissu de qualité premium',
          'Idéale dressage et hunter',
          'Homologuée compétition',
          'Livrée nettoyée et repassée',
        ],
        prix_jour: 30,
        prix_occasion: { neuf: 160, 'tres-bon': 110, bon: 75 },
        tailles: ['XS', 'S', 'M', 'L', 'XL'],
        image: '/produits/le-sabotier-colette.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location veste Le Sabotier Colette | Equitry',
        seo_description: 'Louez la veste Le Sabotier Colette à partir de 30€/jour. Coupe française raffinée, idéale dressage. Livraison en France sous 48h.',
      },
      {
        slug: 'le-sabotier-georgette',
        nom: 'Le Sabotier Georgette',
        marque: 'Le Sabotier',
        categorieSlug: 'veste-de-concours',
        description: 'La Georgette de Le Sabotier séduit par son style classique et intemporel. Une veste de concours qui allie tradition et confort pour vos compétitions.',
        points_cles: [
          'Style classique intemporel',
          'Coupe soignée',
          'Confort toute la journée',
          'Homologuée compétition',
          'Livrée nettoyée et repassée',
        ],
        prix_jour: 30,
        prix_occasion: { neuf: 160, 'tres-bon': 110, bon: 75 },
        tailles: ['XS', 'S', 'M', 'L', 'XL'],
        image: '/produits/le-sabotier-georgette.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location veste Le Sabotier Georgette | Equitry',
        seo_description: 'Louez la veste Le Sabotier Georgette à partir de 30€/jour. Style classique et confort. Livraison partout en France.',
      },
      {
        slug: 'le-sabotier-romy',
        nom: 'Le Sabotier Romy',
        marque: 'Le Sabotier',
        categorieSlug: 'veste-de-concours',
        description: 'La Romy de Le Sabotier est la veste moderne de la marque. Sa coupe contemporaine et ses matières nobles en font un choix idéal pour les concours.',
        points_cles: [
          'Coupe contemporaine',
          'Matières nobles',
          'Style moderne et élégant',
          'Homologuée compétition',
          'Livrée nettoyée et repassée',
        ],
        prix_jour: 30,
        prix_occasion: { neuf: 165, 'tres-bon': 115, bon: 78 },
        tailles: ['XS', 'S', 'M', 'L', 'XL'],
        image: '/produits/le-sabotier-romy.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location veste Le Sabotier Romy | Equitry',
        seo_description: 'Louez la veste Le Sabotier Romy à partir de 30€/jour. Coupe contemporaine et matières nobles. Livraison sous 48h partout en France.',
      },
      {
        slug: 'mashang-equine',
        nom: 'Mashang Equine',
        marque: 'Mashang Equine',
        categorieSlug: 'veste-de-concours',
        description: 'La veste de concours Mashang Equine se distingue par son design unique et ses matières haut de gamme. Une veste qui fait la différence en compétition.',
        points_cles: [
          'Design distinctif',
          'Matières haut de gamme',
          'Confort et élégance',
          'Homologuée compétition',
          'Livrée nettoyée et repassée',
        ],
        prix_jour: 30,
        prix_occasion: { neuf: 170, 'tres-bon': 120, bon: 80 },
        tailles: ['XS', 'S', 'M', 'L', 'XL'],
        image: '/produits/mashang-equine.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location veste Mashang Equine | Equitry',
        seo_description: 'Louez une veste de concours Mashang Equine à partir de 30€/jour. Design unique et matières premium. Livraison en France.',
      },
    ],
  },
  {
    slug: 'tapis-de-selle',
    nom: 'Tapis de selle',
    nom_singulier: 'Tapis de selle',
    description: 'Location de tapis de selle de compétition haut de gamme. Cavalleria Toscana, Equidées, Oxxer, GEM — les meilleures marques disponibles à la journée.',
    icon: '🐴',
    produits: [
      {
        slug: 'cavalleria-toscana',
        nom: 'Tapis Cavalleria Toscana',
        marque: 'Cavalleria Toscana',
        categorieSlug: 'tapis-de-selle',
        description: 'Le tapis de selle Cavalleria Toscana est une référence en matière d\'élégance équestre. Broderies soignées, tissu de qualité, il sublime chaque tenue de concours.',
        points_cles: [
          'Broderies Cavalleria Toscana emblématiques',
          'Tissu haute qualité',
          'Compatibilité selle dressage et CSO',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 20,
        prix_occasion: { neuf: 85, 'tres-bon': 55, bon: 35 },
        image: '/produits/tapis-cavalleria-toscana.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location tapis Cavalleria Toscana | Equitry',
        seo_description: 'Louez un tapis de selle Cavalleria Toscana à partir de 20€/jour. Livré propre. Livraison partout en France sous 48h.',
      },
      {
        slug: 'equidees',
        nom: 'Tapis Equidées',
        marque: 'Equidées',
        categorieSlug: 'tapis-de-selle',
        description: 'Le tapis Equidées allie fonctionnalité et esthétique. Conçu pour la compétition, il offre un excellent maintien et un rendu visuel soigné.',
        points_cles: [
          'Maintien optimal',
          'Finitions compétition',
          'Confort pour le cheval',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 20,
        prix_occasion: { neuf: 75, 'tres-bon': 50, bon: 30 },
        image: '/produits/tapis-equidees.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location tapis Equidées | Equitry',
        seo_description: 'Louez un tapis de selle Equidées à partir de 20€/jour. Livraison en France sous 48h.',
      },
      {
        slug: 'oxxer-diamant',
        nom: 'Tapis Oxxer Diamant',
        marque: 'Oxxer',
        categorieSlug: 'tapis-de-selle',
        description: 'Le tapis Oxxer Diamant se distingue par son motif diamant élégant et ses finitions impeccables. Un choix raffiné pour vos concours.',
        points_cles: [
          'Motif diamant distinctif',
          'Finitions impeccables',
          'Tissu haut de gamme',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 20,
        prix_occasion: { neuf: 80, 'tres-bon': 55, bon: 35 },
        image: '/produits/tapis-oxxer-diamant.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location tapis Oxxer Diamant | Equitry',
        seo_description: 'Louez un tapis de selle Oxxer Diamant à partir de 20€/jour. Livraison partout en France.',
      },
      {
        slug: 'oxxer-accent',
        nom: 'Tapis Oxxer Accent',
        marque: 'Oxxer',
        categorieSlug: 'tapis-de-selle',
        description: 'Le tapis Oxxer Accent offre un style affirmé avec ses liserés colorés et ses découpes précises. Idéal pour se démarquer en compétition.',
        points_cles: [
          'Liserés colorés élégants',
          'Découpes précises',
          'Style affirmé',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 20,
        prix_occasion: { neuf: 80, 'tres-bon': 55, bon: 35 },
        image: '/produits/tapis-oxxer-accent.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location tapis Oxxer Accent | Equitry',
        seo_description: 'Louez un tapis de selle Oxxer Accent à partir de 20€/jour. Livraison en France sous 48h.',
      },
      {
        slug: 'gem-ten',
        nom: 'Tapis GEM Ten',
        marque: 'GEM',
        categorieSlug: 'tapis-de-selle',
        description: 'Le tapis GEM Ten se distingue par ses ornements et son style précieux. Une pièce maîtresse pour les cavaliers qui souhaitent briller en compétition.',
        points_cles: [
          'Ornements précieux signature GEM',
          'Style unique et raffiné',
          'Fabrication soignée',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 25,
        prix_occasion: { neuf: 95, 'tres-bon': 65, bon: 45 },
        image: '/produits/tapis-gem-ten.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location tapis GEM Ten | Equitry',
        seo_description: 'Louez un tapis de selle GEM Ten à partir de 25€/jour. Style précieux signature GEM. Livraison partout en France.',
      },
      {
        slug: 'gem-love',
        nom: 'Tapis GEM Love',
        marque: 'GEM',
        categorieSlug: 'tapis-de-selle',
        description: 'Le tapis GEM Love incarne l\'élégance romantique de la marque. Ses détails ornementaux et sa confection soignée en font une pièce d\'exception.',
        points_cles: [
          'Design romantique et élégant',
          'Détails ornementaux signature',
          'Confection haut de gamme',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 25,
        prix_occasion: { neuf: 95, 'tres-bon': 65, bon: 45 },
        image: '/produits/tapis-gem-love.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location tapis GEM Love | Equitry',
        seo_description: 'Louez un tapis de selle GEM Love à partir de 25€/jour. Design signature GEM. Livraison en France sous 48h.',
      },
    ],
  },
  {
    slug: 'bonnet-cheval',
    nom: 'Bonnets cheval',
    nom_singulier: 'Bonnet cheval',
    description: 'Location de bonnets de concours pour cheval. Oxxer, Cavalleria Toscana et modèles pailletés disponibles à la journée, livrés propres.',
    icon: '✨',
    produits: [
      {
        slug: 'oxxer-mesh',
        nom: 'Bonnet Oxxer Mesh',
        marque: 'Oxxer',
        categorieSlug: 'bonnet-cheval',
        description: 'Le bonnet Oxxer Mesh offre un excellent confort grâce à sa matière mesh respirante. Un classique de la compétition, élégant et fonctionnel.',
        points_cles: [
          'Matière mesh respirante',
          'Confort optimal pour le cheval',
          'Finitions de qualité',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 10,
        prix_occasion: { neuf: 40, 'tres-bon': 25, bon: 15 },
        image: '/produits/bonnet-oxxer-mesh.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location bonnet Oxxer Mesh | Equitry',
        seo_description: 'Louez un bonnet de concours Oxxer Mesh à partir de 10€/jour. Livré propre. Livraison en France sous 48h.',
      },
      {
        slug: 'bonnet-pailletes',
        nom: 'Bonnet pailleté',
        marque: 'Equitry',
        categorieSlug: 'bonnet-cheval',
        description: 'Le bonnet pailleté est la touche glamour de votre tenue de concours. Parfait pour se démarquer tout en restant élégant.',
        points_cles: [
          'Paillettes élégantes',
          'Idéal pour se démarquer',
          'Confort pour le cheval',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 10,
        prix_occasion: { neuf: 45, 'tres-bon': 28, bon: 18 },
        image: '/produits/bonnet-pailletes.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location bonnet pailleté concours | Equitry',
        seo_description: 'Louez un bonnet pailleté de concours à partir de 10€/jour. Livraison partout en France sous 48h.',
      },
      {
        slug: 'bonnet-cavalleria-toscana',
        nom: 'Bonnet Cavalleria Toscana',
        marque: 'Cavalleria Toscana',
        categorieSlug: 'bonnet-cheval',
        description: 'Le bonnet Cavalleria Toscana est le complément parfait du tapis de la même marque. Broderies soignées, tissu de qualité, pour une tenue assortie impeccable.',
        points_cles: [
          'Broderies Cavalleria Toscana emblématiques',
          'Parfait en assortiment avec le tapis CT',
          'Tissu haute qualité',
          'Livré propre et prêt à l\'emploi',
        ],
        prix_jour: 12,
        prix_occasion: { neuf: 50, 'tres-bon': 32, bon: 20 },
        image: '/produits/bonnet-cavalleria-toscana.jpg',
        lien_reservation: 'https://equitry-location.fr',
        seo_title: 'Location bonnet Cavalleria Toscana | Equitry',
        seo_description: 'Louez un bonnet Cavalleria Toscana à partir de 12€/jour. Parfait avec le tapis CT. Livraison en France.',
      },
    ],
  },
]

export const conditionLabels: Record<Condition, string> = {
  neuf: 'Neuf',
  'tres-bon': 'Très bon état',
  bon: 'Bon état',
}

export const conditionColors: Record<Condition, string> = {
  neuf: 'bg-sage text-cream',
  'tres-bon': 'bg-sage-lighter/50 text-sage-darkest',
  bon: 'bg-cream border border-sage-lighter text-sage-dark',
}

export function getProduit(categorieSlug: string, produitSlug: string): Produit | undefined {
  const cat = categories.find((c) => c.slug === categorieSlug)
  return cat?.produits.find((p) => p.slug === produitSlug)
}

export function getCategorie(slug: string): Categorie | undefined {
  return categories.find((c) => c.slug === slug)
}
