# Equitry – Site web

Site Next.js 14 pour equitry.fr

## Stack technique
- **Framework** : Next.js 14 (App Router)
- **Style** : Tailwind CSS (charte graphique Equitry)
- **Hébergement** : Vercel
- **Polices** : Poppins (titres) + Lora (textes) via Google Fonts

## Structure des pages
```
/                        → Accueil
/location-courte-duree   → Location 1-3 jours
/abonnement              → Abonnements mensuel
/capteurs                → Capteurs équestres
/comment-ca-marche       → Fonctionnement du service
/faq                     → Questions fréquentes
/contact                 → Formulaire de contact
/blog                    → Liste des articles
/blog/[slug]             → Article individuel
```

## Installation locale

```bash
npm install
npm run dev
```
Puis ouvrir http://localhost:3000

## Déploiement sur Vercel

1. Pusher le code sur GitHub (repository : lea-equitry/equitry)
2. Aller sur vercel.com → "New Project"
3. Importer le repository GitHub
4. Cliquer "Deploy" → le site est en ligne sur equitry.vercel.app

## Ajouter le logo

Placer le fichier `logo.png` dans le dossier `/public/`

## Configurer le formulaire de contact

Le formulaire utilise Formspree (gratuit jusqu'à 50 messages/mois).
1. Créer un compte sur formspree.io
2. Créer un formulaire et copier l'ID
3. Remplacer `VOTRE_ID_FORMSPREE` dans `src/app/contact/page.tsx`

## Brancher le domaine equitry.fr (Ionos)

1. Dans Vercel → Settings → Domains → ajouter `equitry.fr`
2. Dans Ionos → DNS → modifier les entrées :
   - Type A : `76.76.21.21`
   - CNAME www : `cname.vercel-dns.com`
3. Attendre 1-4h pour la propagation

## Palette de couleurs Equitry
- `#738C86` – Vert sauge principal
- `#5C706B` – Vert sauge foncé
- `#FFFAF5` – Crème fond
- `#323D3B` – Textes foncés
- `#9AAEA9` – Gris sauge clair
- `#CCBCA9` – Taupe
