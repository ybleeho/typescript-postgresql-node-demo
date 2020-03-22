FROM node:10

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY .env /app

RUN node -v
RUN ls -la
RUN yarn install

