FROM node:10 AS build
WORKDIR /app/
COPY . /app/to-do
RUN cd to-do && npm install && npm run build
RUN apt-get update && apt-get install -y vim
EXPOSE 8080
CMD ["node","/app/to-do/server.js"]
