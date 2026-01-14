FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app

# COPY package.json .

COPY . .

RUN npm install

EXPOSE 4000

# Commands that needs to be run in runtime
CMD ["npm", "run", "dev"]