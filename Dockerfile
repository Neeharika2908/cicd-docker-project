FROM node:20

WORKDIR /app

COPY . .

# install backend deps
RUN cd app && npm install

# build frontend
RUN cd frontend && npm install && npm run build

EXPOSE 3000

CMD ["node", "app/server.js"]