# Use a Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build React app
RUN npm run build

# Install 'serve' to serve the built app
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Start the production server
CMD ["serve", "-s", "build", "-l", "5000"]
