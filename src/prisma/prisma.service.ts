import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { envs } from '../config/envs';

@Injectable()
export class PrismaService extends PrismaClient {
  private readonly logger = new Logger('PrismaService');

  constructor() {
    const adapter = new PrismaBetterSqlite3({ url: envs.databaseUrl });
    super({ adapter });
    this.logger.log('PrismaService initialized');
    this.logger.log(`Database connected`);
  }
}
