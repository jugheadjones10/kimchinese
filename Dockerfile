# syntax=docker/dockerfile:1

FROM node:18.9.0
FROM mcr.microsoft.com/playwright:focal
# ENV NODE_ENV=production

EXPOSE 3000

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
COPY ["packages/backend/package.json", "./packages/backend/"]
COPY ["packages/shared/package.json", "./packages/shared/"]
# COPY [".env", "./packages/backend"]

# RUN npm install --production
RUN npm install

COPY . .
# COPY ["packages/backend/.env", "./.env"]
COPY ["packages/backend/.env", "./.env"]

RUN npm run build -w packages/backend

CMD [ "npm", "run", "debug", "-w", "packages/backend" ]
