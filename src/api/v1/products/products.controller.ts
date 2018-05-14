import { Get, Controller, Inject, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Model } from 'mongoose';
import Config from '../../../config';
import { ProductsService } from './products.service';
import { ProductsDto } from './products.model';

@Controller(Config.apiV1.products)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() productsDto: ProductsDto) {
    return await this.productsService.create(productsDto);
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.productsService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.productsService.delete(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() productsDto: ProductsDto) {
    return await this.productsService.update(params.id, productsDto);
  }
}
