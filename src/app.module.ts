import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { PrismaService } from './service/prisma.service'; 

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [PrismaService],
})
export class AppModule {}
