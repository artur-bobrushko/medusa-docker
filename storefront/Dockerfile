FROM node:16-alpine
LABEL author="phuchoang <lzootee@gmail.com>"

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache git \
    && npm install --loglevel=error \
    && npm cache clean --force

COPY . .
RUN npm run build

EXPOSE 8000

CMD ["npm", "start"]