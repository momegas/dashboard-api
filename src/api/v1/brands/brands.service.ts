import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandSchemaName } from './brands.model';
import { CrudService } from '../../../shared/services/crud/crud.service';

@Injectable()
export class BrandsService extends CrudService {
  constructor(@InjectModel(BrandSchemaName) private readonly brandsRepository: Model<Brand>) {
    super(brandsRepository);
  }
}
