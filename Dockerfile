FROM node:21.5.0

WORKDIR /app

COPY package.json yarn.lock /app/

ENV HUSKY=0

RUN apt-get update && apt update
RUN yarn