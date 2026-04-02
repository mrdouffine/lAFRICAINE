# LAFRICAINE - Site Officiel Sename Koffi Agbodjinou

Site web minimaliste pour Sename Koffi Agbodjinou, designer, architecte, anthropologue et entrepreneur. Construit avec Next.js 15 et Sanity CMS.

## 🎯 Caractéristiques

- **Design minimaliste** en noir et blanc
- **Sanity CMS** pour la gestion de contenu
- **Typographie soignée** (Helvetica Neue, Arial)
- **Responsive design** adaptatif
- **Pages dynamiques** : Biography, Collaborations, Galleries, Publications, Quotes
- **Images optimisées** avec Next.js Image
- **Studio Sanity intégré** à `/admin`

## 📦 Technologies

- **Next.js 15** - Framework React
- **Sanity CMS** - Headless CMS
- **React 19** - Bibliothèque UI
- **Styled Components** - Styling
- **@portabletext/react** - Rendu de contenu riche

## 🚀 Installation

```bash
npm install
```

## 💻 Développement

### Démarrer l'application Next.js

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Démarrer Sanity Studio

Le studio Sanity est accessible à [http://localhost:3001/admin](http://localhost:3001/admin)

**⚠️ Important** : La première fois, vous devez enregistrer le studio :
- Cliquez sur "Add development host" pour le développement local
- Ou "Register this studio" pour la production

## 📚 Documentation

- **[NEXT_STEPS.md](./NEXT_STEPS.md)** - Étapes immédiates pour configurer Sanity
- **[SANITY_GUIDE.md](./SANITY_GUIDE.md)** - Guide complet d'utilisation de Sanity

## 🏗️ Structure du Projet

```
/app
  /api                    # API routes pour Sanity
    /collaborations
    /galleries
    /publications
    /quotes
  /biography             # Page biographie (version statique)
  /biography-sanity      # Page biographie (version Sanity)
  /collaborations        # Page collaborations (version statique)
  /collaborations-sanity # Page collaborations (version Sanity)
  /admin                 # Studio Sanity
  ... autres pages

/sanity
  /schemaTypes           # Schémas de contenu
    - biographyType.js
    - collaborationType.js
    - galleryType.js
    - publicationType.js
    - quoteType.js
    - siteSettingsType.js
  /lib                   # Utilitaires Sanity
    - client.js          # Client Sanity
    - queries.js         # Requêtes GROQ
    - image.js           # Helper d'images

/components
  - RichText.js          # Composant pour texte riche

/scripts
  - populate-sanity.js   # Script pour peupler Sanity

/public
  /images                # Images statiques
```

## 🎨 Pages Disponibles

- `/` - Page d'accueil avec menu
- `/biography` - Biographie de Sename
- `/collaborations` - Projets et partenariats
- `/photo` - Galeries photos
- `/publication` - Publications et livres
- `/quotes` - Citations et pensées
- `/admin` - Studio Sanity (gestion de contenu)

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` avec :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="jn89s8xa"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="votre_token_api" # Optionnel, pour le script de population
```

### Sanity CMS

1. Enregistrez le studio à `/admin`
2. Ajoutez du contenu dans chaque section
3. Les pages se mettront à jour automatiquement

## 📝 Gestion de Contenu

### Ajouter une biographie

1. Allez sur `/admin`
2. Cliquez sur "Biographie"
3. Créez un nouveau document
4. Remplissez les champs et uploadez la photo
5. Publiez

### Ajouter des collaborations

1. Cliquez sur "Collaboration"
2. Créez un nouveau document
3. Ajoutez titre, description, image, année
4. Définissez un ordre d'affichage
5. Publiez

### Créer des galeries

1. Cliquez sur "Galerie"
2. Créez une nouvelle galerie
3. Uploadez plusieurs images
4. Ajoutez des légendes
5. Publiez

## 🚀 Build Production

```bash
npm run build
npm start
```

## 🔗 API Endpoints

- `GET /api/collaborations` - Liste des collaborations
- `GET /api/galleries?category=photos` - Galeries (avec filtre)
- `GET /api/publications` - Publications
- `GET /api/quotes?featured=true` - Citations (avec filtre)

## 📖 Utilisation de Sanity dans le Code

```javascript
// Récupérer des données
import { getBiography } from '@/sanity/lib/queries';

const biography = await getBiography();

// Afficher une image
import { urlFor } from '@/sanity/lib/image';

<img src={urlFor(image).width(800).url()} />

// Afficher du texte riche
import { RichText } from '@/components/RichText';

<RichText content={biography.longBio} />
```

## 🤝 Contribution

Ce projet est privé. Pour toute question, contactez l'équipe de développement.

## 📄 Licence

Tous droits réservés - L'Africaine d'architecture
