#!/bin/bash
echo hi123
chmod +x build.sh
./build.sh
docker login -u prasannakumarjm -p sh0f0oj23j
# Use non-interactive login
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

# Tag and push the image
docker tag shop prasannakumarjm/shop
docker push prasannakumarjm/shop
docker pull prasannakumarjm/shop
docker run -d -p 8000:80 --name=my-service-repo prasannakumarjm/shop

