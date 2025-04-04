# Stage 1: Build the React Frontend
FROM node:18-alpine as build
WORKDIR /app

# Copy package.json first for efficient caching
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the frontend (React)
RUN npm run build

# Stage 2: Run the Node.js Backend
FROM node:18-alpine
WORKDIR /app

# Copy the built frontend and backend
COPY --from=build /app ./

# Expose the backend port
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]
