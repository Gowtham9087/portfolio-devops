# ── Stage 1: Build ──────────────────────────────────────────
FROM node:18.20.4-alpine3.19 AS builder

WORKDIR /app

COPY package.json package-lock.json .npmrc ./

RUN npm ci

COPY . .

RUN npm run build

# ── Stage 2: Serve ──────────────────────────────────────────
FROM nginx:1.27.4-alpine3.21 AS production

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

LABEL maintainer="Gowtham"
LABEL version="1.0"
LABEL description="Portfolio website - React + Vite"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]