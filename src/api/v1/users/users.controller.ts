import { Get, Controller, Inject, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Model } from 'mongoose';
import Config from '../../../config';
import { UsersService } from './users.service';
import { UserDto } from './users.model';

@Controller(Config.apiV1.users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userDto: UserDto) {
    return await this.usersService.create(userDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.usersService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.usersService.delete(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() userDto: UserDto) {
    return await this.usersService.update(params.id, userDto);
  }
}
