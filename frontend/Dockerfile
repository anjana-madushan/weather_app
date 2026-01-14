FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# Commands that needs to be run in runtime
CMD ["npm", "run", "dev"]