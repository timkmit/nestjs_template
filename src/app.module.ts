import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { PrismaService, PrismaUserService } from './service/prisma.service'; 

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [PrismaService, PrismaUserService],
})
export class AppModule {}
