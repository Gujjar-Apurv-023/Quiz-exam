# Frontend Dockerfile - Nginx Web Server for Static Assets
FROM node:18-alpine as builder

WORKDIR /usr/src/app

# Copy package files if needed for any build process
COPY package*.json ./
RUN npm install --omit=dev 2>/dev/null || true

# Copy frontend files
COPY simulator.html ./
COPY exams_data.js ./
COPY assets/ ./assets/

# Use nginx as the final stage to serve static content
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static files from builder
COPY --from=builder /usr/src/app/simulator.html /usr/share/nginx/html/
COPY --from=builder /usr/src/app/exams_data.js /usr/share/nginx/html/
COPY --from=builder /usr/src/app/assets/ /usr/share/nginx/html/assets/

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
