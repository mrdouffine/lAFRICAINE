# 🎯 Configuration Sanity CMS - Étapes Immédiates

## ✅ Ce qui a été fait

J'ai configuré Sanity CMS pour votre application LAFRICAINE avec :

### 📦 Schémas créés
- ✅ **Biography** - Pour gérer la biographie de Sename
- ✅ **Collaboration** - Pour les projets et partenariats
- ✅ **Gallery** - Pour les collections d'images
- ✅ **Publication** - Pour les livres et articles
- ✅ **Quote** - Pour les citations
- ✅ **Site Settings** - Pour les paramètres généraux

### 🔧 Fichiers créés
- ✅ Schémas dans `/sanity/schemaTypes/`
- ✅ Fonctions de requêtes dans `/sanity/lib/queries.js`
- ✅ Composant RichText dans `/components/RichText.js`
- ✅ API routes dans `/app/api/`
- ✅ Pages d'exemple avec Sanity
- ✅ Script de population des données

## 🚀 PROCHAINES ÉTAPES (À FAIRE MAINTENANT)

### Étape 1 : Enregistrer le Studio Sanity

Vous avez actuellement le studio ouvert à `http://localhost:3001/admin`.

**Choisissez une option :**

#### Option A : Développement Local (RECOMMANDÉ pour commencer)
1. Sur la page du studio, cliquez sur **"Add development host"**
2. Cela vous permettra d'utiliser le studio immédiatement
3. Pas besoin de compte Sanity pour cette option

#### Option B : Production (Pour déploiement)
1. Cliquez sur **"Register this studio"**
2. Connectez-vous avec votre compte Sanity (ou créez-en un)
3. Suivez les instructions à l'écran

### Étape 2 : Ajouter du contenu dans Sanity

Une fois le studio enregistré :

1. **Créer la biographie**
   - Cliquez sur "Biographie" dans le menu latéral
   - Cliquez sur le bouton "+" ou "Create"
   - Remplissez les champs :
     - Nom : `Sename Koffi AGBODJINOU`
     - Uploadez la photo de portrait depuis `/public/images/bio_portrait.png`
     - Ajoutez les lignes de biographie courte
     - Copiez le texte de la biographie longue
   - Cliquez sur "Publish"

2. **Créer des collaborations**
   - Cliquez sur "Collaboration"
   - Créez plusieurs collaborations avec images
   - Définissez un ordre d'affichage (1, 2, 3...)

3. **Créer des galeries**
   - Cliquez sur "Galerie"
   - Créez une galerie
   - Uploadez plusieurs images
   - Publiez

### Étape 3 : Tester les pages avec Sanity

J'ai créé des pages d'exemple qui utilisent Sanity :

- **Biography avec Sanity** : `http://localhost:3000/biography-sanity`
- **Collaborations avec Sanity** : `http://localhost:3000/collaborations-sanity`

Visitez ces pages pour voir comment les données de Sanity s'affichent.

### Étape 4 : Migrer vos pages existantes

Une fois que vous êtes satisfait du fonctionnement, vous pouvez :

1. Remplacer le contenu de vos pages actuelles par les versions Sanity
2. Ou renommer les pages `-sanity` pour remplacer les originales

## 📝 Utilisation du Script de Population (Optionnel)

Si vous voulez peupler automatiquement Sanity avec les données existantes :

1. **Créer un token API dans Sanity** :
   - Allez sur https://www.sanity.io/manage
   - Sélectionnez votre projet
   - Allez dans "API" → "Tokens"
   - Créez un token avec les droits "Editor"
   - Copiez le token

2. **Ajouter le token dans `.env.local`** :
   ```bash
   SANITY_API_TOKEN="votre_token_ici"
   ```

3. **Installer dotenv** :
   ```bash
   npm install dotenv
   ```

4. **Exécuter le script** :
   ```bash
   node scripts/populate-sanity.js
   ```

## 🎨 Structure des URLs d'API

Vos données sont accessibles via ces endpoints :

- `GET /api/collaborations` - Liste des collaborations
- `GET /api/galleries?category=photos` - Galeries (avec filtre optionnel)
- `GET /api/publications` - Publications
- `GET /api/quotes?featured=true` - Citations (avec filtre optionnel)

## 📚 Documentation

Consultez `SANITY_GUIDE.md` pour :
- Guide complet d'utilisation
- Exemples de code
- Fonctions disponibles
- Ressources et liens utiles

## ❓ Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Vérifiez que le studio est bien enregistré
2. Vérifiez que vous avez publié du contenu
3. Consultez la console du navigateur pour les erreurs
4. Demandez-moi de l'aide !

---

**🎯 Action immédiate : Allez sur http://localhost:3001/admin et enregistrez le studio !**
