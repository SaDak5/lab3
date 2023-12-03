# Étape 1 : Utiliser une image Node.js en tant que base
FROM node:14-alpine as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires pour l'installation des dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet dans le répertoire de travail
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Utiliser l'image officielle Nginx avec support Angular
FROM nginx:alpine

# Copier les fichiers construits à partir de l'étape précédente dans le répertoire de travail du serveur Nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Nginx configuré pour gérer les routes Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port sur lequel le serveur Nginx s'exécute (par défaut : 80)
EXPOSE 80

# Commande pour démarrer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
