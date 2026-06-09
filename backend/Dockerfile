# Backend Dockerfile - Node.js API Server
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package descriptors and install production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy application files
COPY server.js ./
COPY unlock_client_snippet.js ./
COPY .env.example ./

# Expose server listener port
EXPOSE 8000

# Set running mode and entrypoint
ENV NODE_ENV=production
CMD ["node", "server.js"]
