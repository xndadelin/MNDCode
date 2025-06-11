FROM node:18

# Instalează g++, PostgreSQL dev tools
RUN apt-get update && apt-get install -y \
    g++ \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Setează directorul de lucru
WORKDIR /app

# Copiază fișierele aplicației
COPY package*.json ./
COPY . .

# Instalează dependențele
RUN npm install

# Creează folderul "running"
RUN mkdir -p /app/running

# Expune portul aplicației
EXPOSE 2100

# Rulează aplicația
CMD ["node", "app.js"]
