import { SharedModule } from './../../shared/shared.module';
import { FilesService } from './files/files.service';
import { FilesMongooseModuleOpts } from './files/files.model';
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
import { UserMongooseModuleOpts } from './users/users.model';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { FilesController } from './files/files.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      CategoriesMongooseModuleOpts,
      BrandsMongooseModuleOpts,
      ShopMongooseModuleOpts,
      ProductMongooseModuleOpts,
      UserMongooseModuleOpts,
      FilesMongooseModuleOpts,
    ]),
    SharedModule,
  ],
  controllers: [
    ShopsController,
    CategoriesController,
    BrandsController,
    ProductsController,
    UsersController,
    FilesController,
  ],
  providers: [
    ShopsService,
    CategoriesService,
    BrandsService,
    ProductsService,
    UsersService,
    FilesService,
  ],
})
export class RestApiV1Module {}
