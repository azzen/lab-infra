FROM node:latest

COPY ./app /opt/app

WORKDIR /opt/app

RUN npm install

EXPOSE 1337

CMD ["node", "/opt/app/index.js"]