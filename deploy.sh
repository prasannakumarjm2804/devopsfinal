#!/bin/bash
set -e  # Exit on any error

echo "🚀 Starting Deployment Process..."
echo "Checking if build.sh exists..."
ls -l build.sh || { echo "❌ build.sh not found!"; exit 1; }

echo "🔧 Granting Execute Permissions to build.sh..."
chmod +x build.sh

echo "🛠 Running Build Script..."
./build.sh

echo "🔑 Logging into Docker Hub..."
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

echo "🐳 Building Docker Image..."
docker build -t prasannakumarjm/shop:latest .

echo "🏷 Tagging Docker Image..."
docker tag prasannakumarjm/shop:latest prasannakumarjm/shop

echo "📤 Pushing Image to Docker Hub..."
docker push prasannakumarjm/shop

echo "📥 Pulling Image from Docker Hub..."
docker pull prasannakumarjm/shop

echo "🚀 Running Container..."
docker stop my-service-repo || true
docker rm my-service-repo || true
docker run -d -p 8000:80 --name=my-service-repo prasannakumarjm/shop

echo "✅ Deployment Successful!"


