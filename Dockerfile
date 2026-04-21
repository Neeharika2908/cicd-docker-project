# Use Node base
FROM node:20

# Set working dir
WORKDIR /app

# Copy everything
COPY . .

# Install backend deps
RUN cd app && npm install

# Build frontend
RUN cd frontend && npm install && npm run build

# Move frontend build to backend
RUN cp -r frontend/dist app/public

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "app/server.js"]