FROM --platform=linux/arm64 node:20.15.0-alpine3.19

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json ./package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

CMD ["npm", "run", "web"]
