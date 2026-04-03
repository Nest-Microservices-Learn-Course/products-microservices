FROM node:25-alpine3.22

WORKDIR /usr/src/app
COPY package*.json ./

# RUN yarn install
RUN npm install -g pnpm
RUN pnpm install

COPY . .

# RUN yarn prisma generate

EXPOSE 3001

# CMD ["yarn", "start:dev"]