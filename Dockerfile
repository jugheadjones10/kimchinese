# syntax=docker/dockerfile:1

FROM node:16.16.0
ENV NODE_ENV=production

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
EXPOSE 3000

COPY ["packages/backend", "./packages/backend"]
COPY ["packages/shared", "./packages/shared"]
RUN npm install --production
RUN npm run build -w packages/backend 

CMD [ "npm", "start", "-w", "packages/backend" ]
