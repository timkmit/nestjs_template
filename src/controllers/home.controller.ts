import { Controller, Get, Param, Render, Redirect, Post, Body } from '@nestjs/common';
import { PrismaService, PrismaUserService } from 'src/service/prisma.service';

@Controller('/')
export class HomeController {
  constructor(private prismaUserService: PrismaUserService) {}

  @Get('/users')
  async users() {
    return await this.prismaUserService.findAll();
  }

  @Get('/')
  @Render('index')
  async renderIndex() {
    return { users: await this.prismaUserService.findAll() };
  }

  @Get('/users/:id/delete')
@Redirect('/')
async deleteUser(@Param('id') userId: string) {
  const id = parseInt(userId, 10); 
  await this.prismaUserService.deleteUser(id);
}

@Post('/add-user')
@Redirect('/')
async addUser(@Body() userData) {
  await this.prismaUserService.createUser(userData);
}
}
