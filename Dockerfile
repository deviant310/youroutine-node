FROM node:15.0.1

ARG NPM_USER
ARG NPM_TOKEN
ARG NPM_EMAIL
ARG NPM_REGISTRY
ARG NPM_SCOPE

WORKDIR /var/www/html

#RUN npm i npm-cli-login -g
#RUN npm-cli-login -u $NPM_USER -p $NPM_TOKEN -e $NPM_EMAIL -r $NPM_REGISTRY -s $NPM_SCOPE

COPY .npmrc .
COPY ./package*.json ./
RUN npm i
COPY ./src/. ./src/
COPY ./build/. ./build/
COPY ./*.js ./