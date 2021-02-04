FROM node:10 AS build
WORKDIR /app/
COPY my-app /app/to-do
RUN cd to-do/app && npm install
RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt
RUN apt-get update && apt-get install -y vim
EXPOSE 3080
#CMD ["node","/app/to-do/my-app/app/app.js"]
