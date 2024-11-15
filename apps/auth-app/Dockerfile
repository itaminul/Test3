FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install
RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start:dev"]