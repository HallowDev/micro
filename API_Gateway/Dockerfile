FROM node:20.11.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

CMD ["npm", "start"]