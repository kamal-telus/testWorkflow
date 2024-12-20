FROM node:20

ENV MONGODB_CONNECTION_PROTOCOL "mongodb"
ENV MONGODB_CONNECTION_HOST "localhost"
ENV MONGODB_CONNECTION_PORT "27017"
ENV MONGODB_CONNECTION_DATABASE "test"
ENV MONGODB_CONNECTION_USERNAME ""
ENV MONGODB_CONNECTION_PASSWORD ""

WORKDIR /usr/src/client/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]


