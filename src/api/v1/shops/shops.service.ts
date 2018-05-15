import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'shared/services/crud/crud.service';
import { Brand, BrandSchema } from '../brands/brands.model';
import { Category, CategorySchema } from '../categories/categories.model';
import { Product, ProductSchema } from '../products/products.model';
import { Shop, ShopSchema } from './shops.model';
import { User, UserSchema } from '../users/users.model';

@Component()
export class ShopsService extends CrudService {
  constructor(
    @InjectModel(ShopSchema) private readonly shopsRepository: Model<Shop>,
    @InjectModel(BrandSchema) private readonly brandsRepository: Model<Brand>,
    @InjectModel(CategorySchema) private readonly categoriesRepository: Model<Category>,
    @InjectModel(ProductSchema) private readonly productsRepository: Model<Product>,
    @InjectModel(UserSchema) private readonly usersRepository: Model<Product>,
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
