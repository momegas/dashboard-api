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
import { ProductMongooseModuleOpts } from './products/products.model';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    MongooseModule.forFeature([CategoriesMongooseModuleOpts]),
    MongooseModule.forFeature([BrandsMongooseModuleOpts]),
    MongooseModule.forFeature([ShopMongooseModuleOpts]),
    MongooseModule.forFeature([ProductMongooseModuleOpts]),
  ],
  controllers: [ShopsController, CategoriesController, BrandsController, ProductsController],
  components: [ShopsService, CategoriesService, BrandsService, ProductsService],
})
export class RestApiV1Module {}
