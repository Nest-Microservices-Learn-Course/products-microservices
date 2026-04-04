FROM node:25-alpine3.22

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install

COPY . .

# Generate Prisma client only (migrations will run at startup)
RUN yarn prisma generate

EXPOSE 3001

# CMD ["pnpm", "start:dev"]