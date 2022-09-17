FROM node:18-alpine

WORKDIR /app/server

COPY package*.json yarn.lock ./

RUN yarn

COPY . ./app/server

CMD ["yarn", "start:dev"]

