import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandSchema, BrandDto } from './brands.model';
import { CrudService } from 'shared/services/crud.service';

@Component()
export class BrandsService extends CrudService {
  constructor(
    @InjectModel(BrandSchema) private readonly brandModel: Model<Brand>,
  ) {
    super(brandModel);
  }
}
