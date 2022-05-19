FROM ubuntu:20.04

RUN apt update
RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs

WORKDIR /opt/stulab-server/

COPY . .

RUN npm install

# CMD ["npm", "run", "dev"]