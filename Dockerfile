FROM node:20

ARG CACHE_BUST=1

WORKDIR /app

COPY . .

WORKDIR /app/app
RUN npm install

WORKDIR /app/frontend
RUN npm install && npm run build

WORKDIR /app

EXPOSE 3000

CMD ["node", "app/server.js"]