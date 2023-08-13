import {
  Injectable,
  Get,
  Put,
  Post,
  Delete,
  Controller,
  Param,
  Body,
} from '@nestjs/common';
import { usersRepository } from './users.repository';
import { IupdateUser } from 'src/data-interfaces/put.user.interface';
import { IcreateUser } from 'src/data-interfaces/post.user.interface';
import { usersService } from './users.service';

@Controller('/')
export class usersController {
  constructor(private userService: usersService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Post()
  async createUser(@Body() Body: IcreateUser) {
    this.userService.createUser(Body);
  }

  @Put('/:id')
  async updateUser(@Param('id') id: number, @Body() Body: IupdateUser) {
    console.log(Body);
    return this.userService.IupdateUser(id, Body);
  }

  @Delete('/:id')
  async deleteUser(@Param('/id') id: number) {
    return this.userService.deleteUser(id);
  }
}
