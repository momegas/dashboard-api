import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand, BrandSchemaName } from '../brands/brands.model';
import { Category, CategorySchemaName } from '../categories/categories.model';
import { Product, ProductSchemaName } from '../products/products.model';
import { Shop, ShopSchemaName } from './shops.model';
import { User, UserSchemaName } from '../users/users.model';
import { CrudService } from '../../../shared/services/crud/crud.service';

@Injectable()
export class ShopsService extends CrudService {
  constructor(
    @InjectModel(ShopSchemaName) private readonly shopsRepository: Model<Shop>,
    @InjectModel(BrandSchemaName) private readonly brandsRepository: Model<Brand>,
    @InjectModel(CategorySchemaName) private readonly categoriesRepository: Model<Category>,
    @InjectModel(ProductSchemaName) private readonly productsRepository: Model<Product>,
    @InjectModel(UserSchemaName) private readonly usersRepository: Model<Product>,
  ) {
    super(shopsRepository);
  }

  async findShopBrands(shopId: string): Promise<Brand[]> {
    return await this.findRelatedDocuments<Brand>(this.brandsRepository, shopId);
  }

  async findShopCategories(shopId: string): Promise<Category[]> {
    return await this.findRelatedDocuments<Category>(this.categoriesRepository, shopId);
  }

  async findShopProducts(shopId: string): Promise<Product[]> {
    return await this.findRelatedDocuments<Product>(this.productsRepository, shopId);
  }

  async findShopUsers(shopId: string): Promise<User[]> {
    return await this.findRelatedDocuments<User>(this.usersRepository, shopId);
  }

  private async findRelatedDocuments<T>(repository: Model<any>, shopId: string): Promise<T[]> {
    return await repository
      .find()
      .where({ shopId })
      .exec();
  }
}
