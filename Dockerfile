FROM node:11

RUN npm install nodemon -g

RUN mkdir /usr/src/app/

WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm install
