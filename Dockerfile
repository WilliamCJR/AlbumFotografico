FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "servidor.js"]
#docker build . -t pagina
#docker run -p 5000:5000 pagina