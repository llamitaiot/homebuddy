FROM node:14

ARG HOMEBUDDY_PORT="8000"

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y sqlite3 libsqlite3-dev

WORKDIR /app
COPY app.js /app/
COPY package.json /app/

EXPOSE ${HOMEBUDDY_PORT}

RUN npm install

CMD ["npm", "start", "8000"]