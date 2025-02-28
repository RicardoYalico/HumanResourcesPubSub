# Etapa de construcción (build)
FROM node:20 AS build
WORKDIR /app

# Copiar los archivos de configuración del proyecto
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación Angular
RUN npm run build -- --configuration production

# Etapa de producción (serve)
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist/human-resources-pub-sub/browser /usr/share/nginx/html


# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
