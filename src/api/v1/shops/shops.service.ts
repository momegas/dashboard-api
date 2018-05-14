import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from 'shared/services/crud.service';
import { ShopSchema, Shop } from './shops.model';

@Component()
export class ShopsService extends CrudService {
  constructor(
    @InjectModel(ShopSchema) private readonly shopsRepository: Model<Shop>,
  ) {
    super(shopsRepository);
  }
}
