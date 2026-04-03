# Products Microservice

A NestJS-based microservice for managing products with Prisma ORM and SQLite database.

## Description

This is a products management microservice built with NestJS framework. It provides a robust API for product operations including CRUD functionality, validation, and database management using Prisma with SQLite.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm, yarn or pnpm
- Git

## Installation and Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone git@github.com:Nest-Microservices-Learn-Course/products-microservices.git
cd products-ms
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 3. Environment Configuration

Copy the environment template and configure your environment variables:

```bash
cp .env.template .env
```

Edit the `.env` file with your specific configuration.

### 4. Database Setup

Generate Prisma client and run database migrations:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Or if you want to reset the database
npx prisma migrate reset
```

## Running the Application

### Development Mode

```bash
# Using npm
npm run start:dev

# Or using yarn
yarn start:dev

# Or using pnpm
pnpm start:dev
```

The application will start in watch mode with hot reload.

### Production Mode

```bash
# Build the application
npm run build

# Run in production mode
npm run start:prod
```

### Debug Mode

```bash
# Using npm
npm run start:debug

# Or using yarn
yarn start:debug

# Or using pnpm
pnpm start:debug
```

## Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## API Documentation

Once the application is running, you can access the API endpoints. The default port is typically 3000.

## Project Structure

```
src/
├── commons/           # Common utilities and DTOs
├── config/           # Configuration files
├── prisma/           # Prisma database service
├── products/         # Products module
├── app.module.ts     # Root module
└── main.ts          # Application entry point
```

## Technologies Used

- **NestJS** - Progressive Node.js framework
- **Prisma** - Next-generation ORM
- **SQLite** - Database
- **TypeScript** - Typed JavaScript
- **Joi** - Data validation library
- **Class-validator** - Validation decorators

