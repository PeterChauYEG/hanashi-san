FROM node:12.13.0-alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

## create unprivileged user
#RUN mkdir /home/nodejs && \
#    addgroup -S nodejs && \
#    adduser -S -h /home/nodejs -G nodejs -s /bin/bash nodejs && \
#    chown -R nodejs:nodejs /home/nodejs /usr/src/app
#USER nodejs

RUN yarn install --frozen-lockfile && \
    rm -rf /tmp/* && \
    rm -rf /home/nodejs/.npm

RUN mv yarn.lock yarn.lock.bak
COPY . .
RUN mv yarn.lock.bak yarn.lock

RUN yarn build

CMD ["yarn", "start"]
