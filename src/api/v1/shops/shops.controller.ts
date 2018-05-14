import { ShopsService } from './shops.service';
import Config from '../../../config';
import { Get, Controller, Inject, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Model } from 'mongoose';
import { ShopDto } from './shops.model';

@Controller(Config.apiV1.shops)
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post()
  async create(@Body() shopDto: ShopDto) {
    return await this.shopsService.create(shopDto);
  }

  @Get()
  async findAll() {
    return await this.shopsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.shopsService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.shopsService.delete(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() shopDto: ShopDto) {
    return await this.shopsService.update(params.id, shopDto);
  }

  @Get(`:id/${Config.apiV1.brands}`)
  async findShopBrands(@Param() params) {
    return await this.shopsService.findShopBrands(params.id);
  }

  @Get(`:id/${Config.apiV1.categories}`)
  async findShopCategories(@Param() params) {
    return await this.shopsService.findShopCategories(params.id);
  }

  @Get(`:id/${Config.apiV1.products}`)
  async findShopProducts(@Param() params) {
    return await this.shopsService.findShopCategories(params.id);
  }
}
