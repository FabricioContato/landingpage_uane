# Step 1: Build React app with Vite
FROM node:18 AS frontend-builder

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install React dependencies & build
RUN npm install && npm run build

# Move build output and images into Express public/
RUN mkdir -p /app/express_server/public \
    && cp -r /app/dist/* /app/express_server/public/ \
    && mkdir -p /app/express_server/public/src \
    && cp -r /app/src/img /app/express_server/public/src/

# Step 2: Setup Express server
FROM node:18

WORKDIR /app/express_server

# Copy only the express_server folder (already has built assets)
COPY --from=frontend-builder /app/express_server . 

# Install dependencies for express
RUN npm install

# Expose Express server port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
