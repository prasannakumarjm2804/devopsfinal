# Backend: Node.js
FROM node:18-alpine AS backend

# Set working directory
WORKDIR /server

# Copy and install dependencies
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Copy source files
COPY backend .
EXPOSE 5000

# Start Node.js server
CMD ["node", "server.js"]

# Frontend: React with Nginx
FROM node:18-alpine AS frontend
WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Serve React app using Nginx
FROM nginx:latest
COPY --from=frontend /frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

