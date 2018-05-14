import { BrandDto } from './brands.model';
import {
  Get,
  Controller,
  Inject,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  async create(@Body() brandDto: BrandDto) {
    return await this.brandsService.create(brandDto);
  }

  @Get()
  async findAll() {
    return await this.brandsService.findAll();
  }

  @Get(':id')
  async find(@Param() params) {
    return await this.brandsService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.brandsService.delete(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() brandDto: BrandDto) {
    return await this.brandsService.update(params.id, brandDto);
  }
}
