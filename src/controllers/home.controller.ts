import { Controller, Get, Param, Render } from '@nestjs/common';
import { PrismaService, PrismaUserService } from 'src/service/prisma.service';

@Controller("/")
export class HomeController {
  constructor(private prismaUserService: PrismaUserService) {}

  @Get('/users')
  async users() {
    return await this.prismaUserService.findAll();
  }

  @Get("/")
  @Render('index')
  async renderIndex() {
    return { users: await this.prismaUserService.findAll() };
  }
}
