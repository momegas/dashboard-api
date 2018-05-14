import { Model, Document } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from 'shared/services/crud.service';
import { CategorySchema, Category } from './categories.model';

@Component()
export class CategoriesService extends CrudService {
  constructor(
    @InjectModel(CategorySchema)
    private readonly categoriesRepository: Model<Category>,
  ) {
    super(categoriesRepository);
  }
}
