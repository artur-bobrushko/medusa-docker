FROM node:16.16.0

WORKDIR /app/medusa

COPY package.json .

# COPY .babelrc.js .

# COPY .yarnrc.yml .

#COPY .index.js .

COPY src .

COPY data .

RUN apt-get update

RUN apt-get install -y python

RUN npm install -g npm@8.11.0

RUN npm install -g @medusajs/medusa-cli@1.3.21

RUN npm install

COPY . .

ENTRYPOINT ["./develop.sh", "develop"]
