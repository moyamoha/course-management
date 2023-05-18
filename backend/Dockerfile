FROM node:lts

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --force
COPY . .

EXPOSE 5000

CMD ["npm", "start"]