#!/bin/bash
set -e  # Exit script on any error

echo "🚀 Starting Deployment Process..."

# Ensure Docker login
echo "🔑 Logging into Docker Hub..."
echo "sh0f0oj23j" | docker login -u "prasannakumarjm" --password-stdin

# Build and push Docker image
echo "🐳 Building Docker Image..."
docker build -t prasannakumarjm/shop:latest .

echo "📤 Pushing Image to Docker Hub..."
docker push prasannakumarjm/shop:latest

# Stop and remove old container
echo "🛑 Stopping Previous Container..."
docker stop my-service-repo || true
docker rm my-service-repo || true

# Clean up old Docker images
echo "🗑 Removing old Docker images..."
docker image prune -f

# Run the new container
echo "🚀 Running New Container..."
docker run -d -p 8000:5000 --name=my-service-repo prasannakumarjm/shop

echo "✅ Deployment Successful!"
