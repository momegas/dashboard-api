import { Get, Controller, Inject, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Model } from 'mongoose';
import { CategoryDto } from './categories.model';
import { CategoriesService } from './categories.service';
import Config from '../../../config';

@Controller(Config.apiV1.categories)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() categoryDto: CategoryDto) {
    return await this.categoriesService.create(categoryDto);
  }

  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.categoriesService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.categoriesService.delete(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() categoryDto: CategoryDto) {
    return await this.categoriesService.update(params.id, categoryDto);
  }
}
