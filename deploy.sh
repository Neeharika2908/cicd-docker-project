#!/bin/bash

# Configuration
DOCKER_IMAGE="yourusername/cicd-app"
EC2_HOST="your-ec2-ip"
KEY_FILE="~/.ssh/your-key.pem"

echo "🔨 Building Docker image..."
docker build -t $DOCKER_IMAGE:latest .

echo "📤 Pushing to Docker Hub..."
docker push $DOCKER_IMAGE:latest

echo "🚀 Deploying to EC2..."
ssh -i $KEY_FILE ubuntu@$EC2_HOST << 'EOF'
  docker stop cicd-container || true
  docker rm cicd-container || true
  docker pull yourusername/cicd-app:latest
  docker run -d --name cicd-container -p 3000:3000 --restart unless-stopped yourusername/cicd-app:latest
  docker ps | grep cicd-container
EOF

echo "✅ Deployment complete!"
echo "🌐 Visit: http://$EC2_HOST:3000"
