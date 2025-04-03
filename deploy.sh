#!/bin/bash
set -e  # Exit on any error

echo "🚀 Starting Deployment Process..."

# 🛠 Check if build.sh exists and run it
if [ -f "build.sh" ]; then
    echo "🔧 Granting Execute Permissions to build.sh..."
    chmod +x build.sh
    echo "🛠 Running Build Script..."
    ./build.sh
else
    echo "⚠️  Skipping build.sh, file not found!"
fi

# 🔑 Secure Docker Login
echo "🔑 Logging into Docker Hub..."
if ! docker login -u "prasannakumarjm" --password-stdin <<< "sh0f0oj23j"; then
    echo "❌ Docker login failed!"
    exit 1
fi

# 🐳 Build and Tag Docker Image
echo "🐳 Building Docker Image..."
docker build -t prasannakumarjm/shop:latest .

echo "🏷 Tagging Docker Image..."
docker tag prasannakumarjm/shop:latest prasannakumarjm/shop

# 📤 Push Image to Docker Hub
echo "📤 Pushing Image to Docker Hub..."
docker push prasannakumarjm/shop

# 🗑 Stop and Remove Old Container
echo "🚀 Stopping Previous Container..."
docker stop my-service-repo || true
docker rm my-service-repo || true

# 🚀 Remove Old Images to Free Space
echo "🗑 Removing old Docker images..."
docker image prune -f

# 🚀 Run New Container
echo "🚀 Running New Container..."
docker run -d -p 8000:80 --name=my-service-repo prasannakumarjm/shop

# ✅ Success Message
echo "✅ Deployment Successful!"



