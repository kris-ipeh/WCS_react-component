# Création de composant React

React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. Dans cette quête tu verras la récupération de propriété et la gestion des événements.

## Objectifs

* Créer un composant react
* Être capable de l'utiliser dans un autre composant
* Récupérer les propriétés du composant
* Écouter les événements sur un composant

## Etapes

* Création du composant
* Gestion des propriétés
* Gestion des événements

## Challenge

### Show me your property

* Utilise le ``create-react-app`` pour démarrer un nouveau projet vide.
* Créé un composant ``Author`` qui aura une propriété name
* Au clic sur le composant ``<Author />`` une alerte montrera le nom de l'auteur
* Le composant ``<Author />`` doit être appelé dans le composant ``<App />``

### Critères de validation :

Le composant est dans une classe javascript ES6
L'appel du composant ressemble à ``<Author name="Bob" />``
Au clic sur le composant le nom de l'auteur s'affiche

### Test de l'exercice :

    $ git clone https://github.com/kris-ipeh/WCS_react-component.git
    $ cd WCS_react-component
    $ npm install

