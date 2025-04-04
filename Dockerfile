# Stage 1: Build the React App
FROM node:18-alpine as build
WORKDIR /app
# Copy only package files first (to optimize caching)
COPY package.json package-lock.json ./
RUN npm install
# Copy all source files (make sure they are at the root)
COPY . .
# Run build script (ensure "build" exists in package.json)
RUN npm run build

# Stage 2: Run the Node.js Server
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 5000
CMD ["npm", "start"]
