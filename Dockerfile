FROM node:18.3.0-alpine3.14

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

EXPOSE 8000

CMD ["npm", "start"]
