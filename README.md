# Portfolio - Modèle de Données des Projets

## Vue d'ensemble

Ce portfolio utilise un modèle de données structuré pour gérer les projets de manière dynamique. Le modèle est défini dans le fichier `projects-data.js` et permet une gestion flexible des informations de projets.

## Structure du Modèle de Données

### Propriétés Principales

Chaque projet contient les propriétés suivantes :

```javascript
{
    id: 1,                    // Identifiant unique du projet
    title: "Nom du Projet",   // Titre du projet
    description: "...",       // Description courte
    longDescription: "...",   // Description détaillée
    image: "url_image",       // Image principale
    gallery: ["url1", "url2"], // Galerie d'images
    technologies: ["tech1", "tech2"], // Technologies utilisées
    category: "web-development", // Catégorie du projet
    icon: "fas fa-icon",     // Icône FontAwesome
    iconColor: "text-blue-500", // Couleur de l'icône
    bgColor: "bg-blue-100",  // Couleur de fond
    status: "completed",      // Statut du projet
    year: 2024,              // Année du projet
    duration: "3 months",    // Durée du projet
    teamSize: "Solo",        // Taille de l'équipe
    features: ["feature1", "feature2"], // Fonctionnalités
    challenges: ["challenge1"], // Défis rencontrés
    solutions: ["solution1"], // Solutions apportées
    github: "url_github",    // Lien GitHub
    liveDemo: "url_demo",    // Lien démo live
    videoDemo: "url_video"   // Lien vidéo démo
}
```

### Catégories de Projets

- `web-development` : Développement web
- `database-design` : Conception de bases de données
- `fashion-design` : Design de mode

### Statuts de Projets

- `completed` : Projet terminé
- `ongoing` : Projet en cours
- `in-development` : Projet en développement

## Fonctionnalités

### 1. Filtrage Dynamique
- Filtrage par catégorie
- Interface utilisateur intuitive
- Animation des transitions

### 2. Modal de Détails
- Affichage détaillé des projets
- Galerie d'images
- Informations complètes
- Liens vers le code et les démos

### 3. Animations
- Animation d'entrée des cartes
- Transitions fluides
- Effets de survol

## Comment Ajouter un Nouveau Projet

1. Ouvrir le fichier `projects-data.js`
2. Ajouter un nouvel objet dans le tableau `projectsData`
3. Remplir toutes les propriétés requises
4. Ajouter les images dans la galerie
5. Définir les technologies et fonctionnalités

### Exemple d'ajout de projet :

```javascript
{
    id: 6,
    title: "Nouveau Projet",
    description: "Description courte du projet",
    longDescription: "Description détaillée du projet avec contexte et objectifs",
    image: "https://example.com/image.jpg",
    gallery: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    category: "web-development",
    icon: "fas fa-code",
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
    status: "completed",
    year: 2025,
    duration: "2 months",
    teamSize: "Solo",
    features: [
        "Interface utilisateur moderne",
        "API RESTful",
        "Base de données NoSQL"
    ],
    challenges: [
        "Gestion de l'état complexe",
        "Optimisation des performances"
    ],
    solutions: [
        "Utilisation de Redux pour la gestion d'état",
        "Mise en place de lazy loading"
    ],
    github: "https://github.com/username/project",
    liveDemo: "https://demo.example.com",
    videoDemo: "https://youtube.com/watch?v=..."
}
```

## Fonctions JavaScript Principales

### `generateProjectCards(projects)`
Génère les cartes de projets dans l'interface.

### `filterProjects(category)`
Filtre les projets par catégorie.

### `showProjectModal(projectId)`
Affiche le modal de détails d'un projet.

### `animateProjectCards()`
Anime l'entrée des cartes de projets.

## Personnalisation

### Couleurs et Styles
- Modifier les classes Tailwind CSS dans le HTML
- Ajuster les couleurs dans `getStatusColor()`
- Personnaliser les animations dans `animateProjectCards()`

### Ajout de Nouvelles Catégories
1. Ajouter la catégorie dans `projectsData`
2. Créer un bouton de filtre dans le HTML
3. Mettre à jour la logique de filtrage

### Ajout de Nouvelles Propriétés
1. Ajouter la propriété dans le modèle de données
2. Mettre à jour les fonctions de génération
3. Modifier l'affichage dans le modal

## Structure des Fichiers

```
PORTFOLIO/
├── index.html          # Page principale
├── projects-data.js    # Modèle de données
├── README.md          # Documentation
└── images/            # Images des projets
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## Technologies Utilisées

- **HTML5** : Structure de la page
- **CSS3/Tailwind** : Styles et animations
- **JavaScript** : Logique dynamique
- **FontAwesome** : Icônes
- **Unsplash** : Images de démonstration

## Maintenance

### Mise à Jour des Projets
- Modifier directement dans `projects-data.js`
- Les changements sont automatiquement reflétés dans l'interface

### Optimisation des Images
- Utiliser des formats optimisés (WebP, AVIF)
- Redimensionner les images pour le web
- Implémenter le lazy loading

### Performance
- Minimiser les requêtes d'images
- Utiliser la compression des assets
- Optimiser le code JavaScript

## Support

Pour toute question ou suggestion concernant le modèle de données ou l'interface, n'hésitez pas à ouvrir une issue ou à contacter l'équipe de développement. 