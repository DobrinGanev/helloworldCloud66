# Setup and build the client

FROM node:latest  as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install 
COPY client/ ./
RUN npm run build


# Setup the server

FROM node:latest

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install 
COPY server/ ./

ENV PORT 5000

EXPOSE 5000

CMD ["npm", "start"]
