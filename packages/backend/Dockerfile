# syntax=docker/dockerfile:1
FROM node:18.9.0
FROM mcr.microsoft.com/playwright:focal

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
# COPY ["packages/backend/package.json", "./packages/backend/"]
# COPY ["packages/shared/package.json", "./packages/shared/"]
# COPY [".env", "./packages/backend"]

# RUN npm install --production
RUN npm install

# ENV DATABASE_URL=mysql://root:1234@mysql:3306/kimchinese

COPY . .
# the env_file directive doesn't work in docker-compose. Not sure it would have worked anyway, since I configure
# my runtime envrionment with dotenv, which reads from a .env file and not the shell environment.
COPY [".docker.env", ".env"]

RUN npm run build
CMD ["npm", "start"]
