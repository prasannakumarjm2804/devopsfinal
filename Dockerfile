# Use Node.js image
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

# Set MongoDB connection string as an environment variable
ENV MONGO_URI=mongodb+srv://shopy:prasannakumarjm@cluster0.czxko6q.mongodb.net/ambikasboutique?retryWrites=true&w=majority&appName=Cluster0

# Expose port 5000
EXPOSE 5000

# Start the production server
CMD ["serve", "-s", "build", "-l", "5000"]
