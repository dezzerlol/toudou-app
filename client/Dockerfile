FROM node:alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app/client

COPY package*.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . ./app/client

EXPOSE 3000

CMD ["yarn", "dev"]