# Cahier des charges du projet PRANA

## Contexte

### Présentation / Proposition initiale

Proposition de nom du projet : Prana jardin du corps  
Au sein d'un institut de soin esthétique, la Responsable souhaite refaire son site existant développé avec Wix.com

### Objectif / Contextualisation

Le but du projet est de mettre en place un site fonctionnel et accessible pour que des utilisateurs puissent avoir toutes les informations nécessaires sur l'institut. Il s'agit donc d'un projet de site vitrine tout ce qu'il y a de plus standard sur le plan technique, avec comme particularité que le but visé est surtout de repondre au standard actuel d'accessibilité. Le projet se base sur un site existant développé avec Wix.com mais présentant beaucoup de bugs d'affichage notamment sur la partie responsive mais 
également des liens "morts" ou perturbant l'UX.

### Budget

0 euros

### Délai

Quatre semaines à compter de la validation du projet.

## Spécifications fonctionnelles

### Apparence

- Garder les thèmes couleur et fond du site existant.
- Site responsive, _mobile-first_.

### Contenus

- Des photos de l'institut
- Un article sur la philosophie de l'institut
- Une rubrique des prestations pratiquées
- Une rubrique des marques utilisées
- Une rubrique des offres-coffret
- Un moyen de contacter et trouver facilement l'institut

Les contenus seraient créés _à terme_ via une interface d'administration (à mettre en option dans le devis : dans un premier temps, les contenus seront fournis pour intégration manuelle mais de manière dynamique via des fichiers data).

### Interactions services

- Liens et/ou partages vers les réseaux sociaux
- Contacts mail et téléphonique
- Carte Google Maps

### Langue(s)

En français uniquement.

### Arborescence

- Accueil
- Prestations
    - Epilation
    - Soin de la peau
    - Soin du corps
    - Massage
- Philosophie
- Offres
- Nos marques
    - Couleur Caramel
    - Phyt's
    - Vitacology
    - Peggy Sage
- Nous trouver
- Contactez-nous
- Mentions légales
- Plan du site


### Navigation sur le site

- Un menu principal (_responsive_) vers les catégories et l'accueil.
  - petits écrans : un menu « burger » dans lequel se trouvent les liens
  - sinon : liste de liens visibles
- On peut cliquer sur le texte du menu pour aller sur une page listant toutes les cartes de cette catégorie.
- On peut cliquer sur le boutton ou l'imgae de la carte pour en afficher le contenu détaillé.
- Un menu secondaire (dans le footer) pour lier vers Contact, Mentions légales et Plan du site.

### Templates / charte graphique

#### Layout global

- Un menu avec :
    - Liens vers les catégories
- Une image d'en-tête avec titre + slogan (baseline)
- Le coprs de la pgae affichant les informations recherchées
- Pied de page :
    - Liens vers contact, mentions légales, plan du site

#### Liste des informations

- La page d'accueil liste n'affiche que l'adresse de l'institut et un caroussel de photos de l'institut.
- Les page des catégories liste des cartes d'informations (nombre en fonction des inforamtions disponibles).
- Une carte cliquable présente :
    - Un titre 
    - Un résumé 
    - Une image représentative ou logo pour les marques
    - Un bouton

### Contraintes techniques

- Site _responsive_ en _mobile-first_.
- Compatibilité uniquement avec les dernières versions des navigateurs (Chrome, Firefox, Microsoft Internet Explorer 11 et Edge).
- Accessibilité notament pour les lecteurs d'écran (Tarifs fourni sous forme d'image, doit être lisible par les lecteurs d'écran)

## Spécifications techniques

### Architecture logicielle choisie

Le site sera conçu avec :

#### uniquement en front pour la première version

- JavaScript : il sera développé en React.js version 17.2
- CSS : dans sa version 3


### Description des données

- Cartes
  - Titre
  - Résumé
  - Image ou logo
- Prestations
  - Titre de la prestation
  - Tarifs sous forme d'image
  - Tarif en euros
  - Temps de la prestation si indiqué
- Marques
  - Titre
  - Article sur la marque
  - Lien vers le site de la marque
- Offres
  - Titre
  - Image représentative de l'offre
  - Liste du contenu de l'offre
- Catégories
  - Intitulé
