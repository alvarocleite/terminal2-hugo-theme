#!/bin/bash
# Stop on error
set -e

echo "🎨 Regenerating Tailwind CSS..."

# Install dependencies if they are missing
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run the build command defined in package.json
npm run build:css

echo "✅ Done! CSS files have been updated."