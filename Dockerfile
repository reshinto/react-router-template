FROM node

RUN apt-get update && apt-get install -y vim git

WORKDIR /usr/src

RUN git clone https://github.com/reshinto/react-router-template.git

WORKDIR /usr/src/react-router-template

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
