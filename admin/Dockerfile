FROM node:16.16.0

WORKDIR /app/admin

#COPY . .

COPY ./public ./gatsby-config.js ./package.json ./


RUN rm -rf node_modules

RUN apt-get update

RUN npm install -g npm@8.11.0

RUN npm install -g gatsby-cli@4

RUN npm install --loglevel=error

RUN npm run build &> /dev/null

CMD [ "gatsby", "develop" , "-H", "0.0.0.0", "-p", "7001" ]