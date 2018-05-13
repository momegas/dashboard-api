import { BrandDto } from './brand.dto';
import { Brand } from './brand.interface';
import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BrandSchema } from './brands.schema';
import { CrudService } from 'shared/services/crud.service';

@Component()
export class BrandsService extends CrudService {
  constructor(
    @InjectModel(BrandSchema) private readonly brandModel: Model<Brand>,
  ) {
    super(brandModel);
  }

  async create(brand: BrandDto): Promise<Brand> {
    const newBrand = new this.brandModel(brand);
    return await newBrand.save();
  }

  async findAll(): Promise<Brand[]> {
    return await this.brandModel.find().exec();
  }
}
