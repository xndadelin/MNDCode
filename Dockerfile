# Imagine de bază Node.js
FROM node:18

# Actualizează și instalează pachete necesare
RUN apt-get update && apt-get install -y \
    g++ \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Setează directorul de lucru
WORKDIR /app

# Copiază fișierele de configurare și codul sursă
COPY package*.json ./
COPY . .

# Instalează dependențele
RUN npm install

# Expune portul pe care rulează aplicația
EXPOSE 2100

# Rulează aplicația
CMD ["node", "app.js"]
