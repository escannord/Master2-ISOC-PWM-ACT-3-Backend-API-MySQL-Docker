## Prerequis

- [Node JS](https://nodejs.org/fr/download)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Docker compose](https://docs.docker.com/compose/install/) Il s'installe parfois automatiquement lors de l'installation du Docker Desktop. Pour le vérifier, tapez 
```bash
docker-compose --version
```

## Installation

```bash
git clone https://github.com/escannord/Master2-ISOC-PWM-ACT-2-Backend-api.git
```
ou forker le repositorie.
Ensuite, dans le terminal, il faut se placer dans le répertoire racine du projet et taper cette commande pour installer toutes les dépendances nécessaires à l'implémentation du projet.
```bash
npm install
```

créer ensuite le conteneur contenant la BD dans MySQL en faisant (étant dans le répertoire racine du projet)
```bash
docker-compose up -d
```

## Utilisations

placez-vous dans le répertoire du projet en ligne de commande et lancez
```bash
node ./src/main.js
```
si vous êtes dans le répertoire ``/src/`` la commande sera juste
```bash
node main.js
```

une fois lancé, rendez-vous sur ``http://localhost:3000/`` ou ``http://localhost:3000/users`` pour voir le résultat
