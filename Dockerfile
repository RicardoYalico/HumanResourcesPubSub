# Etapa de construcción (build)
FROM node:20 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa de producción (serve)
FROM nginx:alpine
COPY --from=build /app/dist/human-resources-pub-sub/browser /usr/share/nginx/html

# Copiar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
