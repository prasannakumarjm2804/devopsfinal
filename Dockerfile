# Use Node.js as base image
FROM node:18-alpine 

# Set the working directory
WORKDIR /server 

# Copy backend files
COPY backend/ /server/

# Install dependencies
RUN npm install

# Expose the server port
EXPOSE 5000

# Start the backend service
CMD ["npm", "start"]
