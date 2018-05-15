import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from 'shared/services/crud/crud.service';
import { CategorySchema, Category } from './categories.model';

@Injectable()
export class CategoriesService extends CrudService {
  constructor(@InjectModel(CategorySchema) private readonly categoriesRepository: Model<Category>) {
    super(categoriesRepository);
  }
}
