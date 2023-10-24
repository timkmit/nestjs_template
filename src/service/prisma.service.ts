import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
    private prisma: PrismaClient;
    user: any;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findMany() {
        return this
            .prisma
            .user
            .findMany();
    }
}
