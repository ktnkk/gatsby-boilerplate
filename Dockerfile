FROM node:17.7.2-bullseye-slim
LABEL maintainer="ktnkk@pm.me"
LABEL version="1.0.0"
WORKDIR /home/node/app
RUN apt update -q \
    && apt upgrade -y \
    && apt install -y \
       build-essential \
       git
RUN yarn
