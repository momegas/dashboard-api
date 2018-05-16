import { Model, Document } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from '../../../shared/services/crud/crud.service';
import { Product, ProductSchemaName } from './products.model';

@Injectable()
export class ProductsService extends CrudService {
  constructor(@InjectModel(ProductSchemaName) private readonly productsRepository: Model<Product>) {
    super(productsRepository);
  }
}
