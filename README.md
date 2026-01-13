# Site Vitrine - Ginger Ale Duo

Site web élégant et professionnel pour le duo acoustique Ginger Ale.

## 🎸 Caractéristiques

- **Design élégant et raffiné** : Palette de couleurs chic (or, marron foncé, beige)
- **Responsive** : S'adapte parfaitement aux mobiles, tablettes et ordinateurs
- **Animations fluides** : Transitions et effets au scroll pour une expérience moderne
- **Navigation intuitive** : Menu fixe avec liens vers toutes les sections
- **Sections complètes** :
  - Hero avec titre accrocheur
  - Présentation du duo
  - Répertoire détaillé
  - Galerie média (prête pour vos photos/vidéos)
  - Formulaire de contact

## 🚀 Installation

1. Téléchargez tous les fichiers dans un dossier
2. Ouvrez `index.html` dans votre navigateur

Ou lancez un serveur local :
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server
```

Puis ouvrez http://localhost:8000

## 📝 Personnalisation

### Modifier le contenu

Ouvrez `index.html` et modifiez :
- Le nom du duo (actuellement "Ginger Ale")
- Les descriptions dans la section "Le Duo"
- Le répertoire musical
- Les informations de contact (email, téléphone)

### Ajouter vos photos/vidéos

Dans la section Media (`<section id="media">`), remplacez les placeholders par vos vrais médias :

```html
<!-- Remplacer ceci : -->
<div class="media-item video-placeholder">...</div>

<!-- Par ceci : -->
<div class="media-item">
    <img src="votre-photo.jpg" alt="Description">
</div>
```

Pour les vidéos, vous pouvez utiliser des iframe YouTube/Vimeo :
```html
<div class="media-item">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
</div>
```

### Modifier les couleurs

Dans `styles.css`, ajustez les variables CSS au début du fichier :

```css
:root {
    --primary-color: #2c2416;    /* Couleur principale */
    --secondary-color: #d4af37;  /* Couleur accent (or) */
    --accent-color: #c9a961;     /* Couleur secondaire */
    /* ... */
}
```

### Connecter le formulaire

Le formulaire est actuellement en mode démo. Pour le rendre fonctionnel :

1. **Service tiers** (recommandé pour débutants) :
   - [Formspree](https://formspree.io/) - gratuit jusqu'à 50 soumissions/mois
   - [EmailJS](https://www.emailjs.com/) - gratuit jusqu'à 200 emails/mois

2. **Backend personnalisé** : Créez un endpoint qui reçoit les données du formulaire

## 🌐 Déploiement

### Options gratuites recommandées :

1. **Netlify** (recommandé) :
   - Créez un compte sur [netlify.com](https://netlify.com)
   - Glissez-déposez votre dossier
   - Votre site est en ligne !

2. **GitHub Pages** :
   - Créez un repo GitHub
   - Uploadez vos fichiers
   - Activez GitHub Pages dans les paramètres

3. **Vercel** :
   - Compte gratuit sur [vercel.com](https://vercel.com)
   - Import de votre projet
   - Déploiement automatique

## 📱 Fonctionnalités

- ✅ Menu hamburger sur mobile
- ✅ Animations au scroll
- ✅ Navigation smooth scroll
- ✅ Highlight de la section active
- ✅ Formulaire de contact avec validation
- ✅ Effet parallax sur le hero
- ✅ Design responsive

## 🎨 Polices utilisées

- **Cormorant Garamond** : Titres élégants
- **Montserrat** : Texte lisible et moderne

Les polices sont chargées via Google Fonts (aucune installation nécessaire).

## 📄 Structure des fichiers

```
SiteGingerAleDuo/
├── index.html      # Structure du site
├── styles.css      # Tous les styles
├── script.js       # Interactions JavaScript
└── README.md       # Documentation
```

## 💡 Conseils

1. **Photos professionnelles** : Investissez dans des photos de qualité pour la section média
2. **Domaine personnalisé** : Achetez un nom de domaine (ex: gingeraleduo.com) pour plus de crédibilité
3. **Vidéo teaser** : Ajoutez une courte vidéo de performance dans le hero
4. **Témoignages** : Ajoutez des avis de clients satisfaits
5. **SEO** : Ajoutez des meta tags pour améliorer le référencement

## 🔧 Support

Pour toute question sur la personnalisation, consultez :
- [MDN Web Docs](https://developer.mozilla.org/) - Documentation web
- [CSS-Tricks](https://css-tricks.com/) - Astuces CSS
- [W3Schools](https://www.w3schools.com/) - Tutoriels HTML/CSS/JS

---

Fait avec ❤️ pour Ginger Ale Duo
