import { ShopDto } from '../src/api/v1/shops/shops.model';
import { ProductDto } from '../src/api/v1/products/products.model';
import { CategoryDto } from '../src/api/v1/categories/categories.model';
import { BrandDto } from '../src/api/v1/brands/brands.model';
import { UserDto } from '../src/api/v1/users/users.model';
import { guid } from './test.helpers';

export const shop: ShopDto = {
  name: 'test',
  slug: 'test',
  description: 'test',
};

export const product: ProductDto = {
  name: 'test',
  slug: 'test',
  description: 'test',
  shopId: '1',
};

export const category: CategoryDto = {
  name: 'test',
  slug: 'test',
  description: 'test',
  parentId: '1',
  shopId: '1',
};

export const brand: BrandDto = {
  name: 'test',
  slug: 'test',
  description: 'test',
  shopId: '1',
};

export const user = (): UserDto => ({
  name: 'test',
  email: guid(),
  password: 'test',
  shopId: '1',
  username: guid(),
});
