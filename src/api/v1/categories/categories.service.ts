import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from '../../../shared/services/crud/crud.service';
import { Category, CategorySchemaName } from './categories.model';

@Injectable()
export class CategoriesService extends CrudService {
  constructor(
    @InjectModel(CategorySchemaName) private readonly categoriesRepository: Model<Category>,
  ) {
    super(categoriesRepository);
  }
}
