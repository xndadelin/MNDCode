# Folosește o imagine oficială Node.js ca bază
FROM node:18

# Setează directorul de lucru în container
WORKDIR /app

# Copiază fișierele de configurare și sursă în container
COPY package*.json ./
COPY . .

# Instalează dependențele
RUN npm install

# Expune portul 2100
EXPOSE 2100

# Rulează aplicația
CMD ["node", "app.js"]
