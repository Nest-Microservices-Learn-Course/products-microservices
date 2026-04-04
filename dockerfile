FROM node:25-alpine3.22

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install
# RUN npm install -g pnpm
# RUN pnpm install better-sqlite3 --ignore-scripts=false
# RUN pnpm install --ignore-scripts=false
# RUN npm install

COPY . .

# Generate Prisma client only (migrations will run at startup)
# RUN pnpm prisma generate
# RUN npm run prisma:generate
RUN yarn prisma generate

EXPOSE 3001

# CMD ["pnpm", "start:dev"]