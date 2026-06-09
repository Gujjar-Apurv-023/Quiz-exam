# Use lightweight Node.js base image based on Alpine Linux
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package descriptors and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application files and static web assets
COPY server.js ./
COPY simulator.html ./
COPY exams_data.js ./
COPY assets/ ./assets/

# Expose server listener port
EXPOSE 8000

# Set running mode and entrypoint
ENV NODE_ENV=production
CMD ["node", "server.js"]
