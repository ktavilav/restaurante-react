# Usa una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo en /app
WORKDIR /restaurante-react

# Copia el archivo package.json e instala las dependencias
COPY package*.json .
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 3000 (el puerto por defecto donde se ejecuta la aplicación React)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]