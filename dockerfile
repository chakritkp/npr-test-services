FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx prisma generate

ENV DATABASE_URL="postgresql://postgreslocal:postgreslocalpass@localhost:5432/database?schema=public"

EXPOSE 3000

CMD ["yarn", "start:dev"]
