import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
      return await this.$connect()
  }
  async onModuleDestroy() {
      return await this.$disconnect()
  }
}

@Injectable()
export class PrismaUserService  {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.user.findMany()
  }
}
