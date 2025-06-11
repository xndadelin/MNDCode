FROM node:18

# Instalare pachete necesare: g++, libpq-dev, Docker
RUN apt-get update && apt-get install -y \
    g++ \
    libpq-dev \
    curl \
    ca-certificates \
    gnupg \
    lsb-release \
    && curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] \
       https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
       > /etc/apt/sources.list.d/docker.list \
    && apt-get update \
    && apt-get install -y docker-ce docker-ce-cli containerd.io \
    && rm -rf /var/lib/apt/lists/*

# Directorul de lucru
WORKDIR /app

# Copiază codul aplicației
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
