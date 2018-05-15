import { Model, Document } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from 'shared/services/crud/crud.service';
import { ProductSchema, Product } from './products.model';

@Injectable()
export class ProductsService extends CrudService {
  constructor(@InjectModel(ProductSchema) private readonly productsRepository: Model<Product>) {
    super(productsRepository);
  }
}
