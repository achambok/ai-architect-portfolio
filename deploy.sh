#!/bin/bash

echo "🌐 Enter your GitHub username:"
read USERNAME

echo "📦 Creating GitHub repo..."
gh repo create $USERNAME/ai-architect-portfolio --public --source=. --remote=origin --push

echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"

