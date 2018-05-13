import { BrandDto } from './brand.dto';
import { Get, Controller, Inject, Post, Body } from '@nestjs/common';
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
}
