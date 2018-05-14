import { ShopsController } from './shops/shops.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesMongooseModuleOpts } from './categories/categories.model';
import { BrandsMongooseModuleOpts } from './brands/brands.model';
import { CategoriesController } from './categories/categories.controller';
import { BrandsController } from './brands/brands.controller';
import { CategoriesService } from './categories/categories.service';
import { BrandsService } from './brands/brands.service';
import { ShopMongooseModuleOpts } from './shops/shops.model';
import { ShopsService } from './shops/shops.service';

@Module({
  imports: [
    MongooseModule.forFeature([CategoriesMongooseModuleOpts]),
    MongooseModule.forFeature([BrandsMongooseModuleOpts]),
    MongooseModule.forFeature([ShopMongooseModuleOpts]),
  ],
  controllers: [ShopsController, CategoriesController, BrandsController],
  components: [ShopsService, CategoriesService, BrandsService],
})
export class RestApiV1Module {}
