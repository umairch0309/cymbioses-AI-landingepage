# Stage 1: Build the frontend
FROM node:18-alpine AS builder
WORKDIR /app

COPY . .

# Ensure the .env file is copied (if needed, but it's usually already in the context)
# If you're using Vite, Next.js, etc., they read .env automatically
RUN npm install
RUN npm run build

# Stage 2: Serve via Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
