# ── Stage 1: Build ──────────────────────────────────────────
# PIN exact version — never use :latest in production
FROM node:18.20.4-alpine3.19 AS builder

WORKDIR /app

# Copy package files FIRST (Docker layer cache)
# This layer only re-runs if package.json changes
COPY package.json package-lock.json ./

RUN npm ci --frozen-lockfile

# Copy source after installing deps
COPY . .

RUN npm run build

# ── Stage 2: Serve ──────────────────────────────────────────
# PIN exact nginx version
FROM nginx:1.27.4-alpine3.21 AS production

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy only the built dist — nothing else from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add metadata labels
LABEL maintainer="Gowtham"
LABEL version="1.0"
LABEL description="Portfolio website - React + Vite"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]