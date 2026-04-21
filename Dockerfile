FROM node:20

WORKDIR /app

# Copy everything
COPY . .

# Install backend dependencies
WORKDIR /app/app
RUN npm install

# Build frontend
WORKDIR /app/frontend
RUN npm install && npm run build

# Go back to root
WORKDIR /app

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "app/server.js"]