# syntax=docker/dockerfile:1
FROM node:18.9.0
FROM mcr.microsoft.com/playwright:focal

RUN apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg && \
    curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | apt-key add - && \
    echo "deb https://packages.doppler.com/public/cli/deb/debian any-version main" | tee /etc/apt/sources.list.d/doppler-cli.list && \
    apt-get update && \
    apt-get -y install doppler

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

# the env_file directive doesn't work in docker-compose. Not sure it would have worked anyway, since I configure
# my runtime envrionment with dotenv, which reads from a .env file and not the shell environment.
# COPY [".docker.env", ".env"]

RUN npm run build
CMD ["doppler", "run", "--", "npm start"]
