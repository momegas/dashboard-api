import { ShopDto, Shop } from './../src/api/v1/shops/shops.model';
import { RestApiV1Module } from './../src/api/v1/restApiV1.module';
const req = require('supertest');
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import Config from '../src/config';
import * as entities from './entities';
import { Product } from '../src/api/v1/products/products.model';
import { Category } from '../src/api/v1/categories/categories.model';
import { Brand } from '../src/api/v1/brands/brands.model';
import { User } from '../src/api/v1/users/users.model';
import { deleteEntity } from './test.helpers';

// Tests are a little different here because of unique index in name

describe('Shops', () => {
  let app: INestApplication;
  let currentEntityId = null;
  const endpoint = `/${Config.apiV1.shops}`;
  const nameAfterUpdate = 'test2';

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [MongooseModule.forRoot(Config.databases.mongo.url), RestApiV1Module],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST', () => {
    it(`should create new entity`, async () => {
      const res = await req(app.getHttpServer())
        .post(endpoint)
        .send({ ...entities.shop, name: `entities.shop.name ${new Date().getMilliseconds()}` })
        .expect(201);
      currentEntityId = res.body._id;
      expect(res.body.slug).toBe(entities.shop.slug);
    });
  });

  describe('GET', () => {
    it(`should get all entities`, async () => {
      const res = await req(app.getHttpServer())
        .get(endpoint)
        .expect(200);
      const currentEntity = res.body.find(entity => entity._id === currentEntityId);
      expect(currentEntity.slug).toBe(entities.shop.slug);
    });
  });

  describe('GET /id', () => {
    it(`should get entity with specified id`, async () => {
      const res = await req(app.getHttpServer())
        .get(`${endpoint}/${currentEntityId}`)
        .expect(200);
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.slug).toBe(entities.shop.slug);
    });
  });

  describe('PUT /id', () => {
    it(`should update entity with specified id`, async () => {
      const res = await req(app.getHttpServer())
        .put(`${endpoint}/${currentEntityId}`)
        .send({ name: nameAfterUpdate })
        .expect(200);
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.slug).toBe(entities.shop.slug);
    });
  });

  describe('GET /id/products', () => {
    it(`should be able to find products of entity`, async () => {
      const newProductRes: { body: Product } = await req(app.getHttpServer())
        .post(`/${Config.apiV1.products}`)
        .send(entities.product)
        .expect(201);
      const res: { body: Product[] } = await req(app.getHttpServer())
        .get(`${endpoint}/${entities.product.shopId}/${Config.apiV1.products}`)
        .expect(200);
      const expectedProduct: Product = res.body.find(p => p._id === newProductRes.body._id);
      expect(expectedProduct).toBeDefined();
      await deleteEntity(
        req(app.getHttpServer()),
        `/${Config.apiV1.products}/${expectedProduct._id}`,
      );
    });
  });

  describe('GET /id/categories', () => {
    it(`should be able to find categories of entity`, async () => {
      const newCategoryRes: { body: Category } = await req(app.getHttpServer())
        .post(`/${Config.apiV1.categories}`)
        .send(entities.brand)
        .expect(201);
      const res: { body: Category[] } = await req(app.getHttpServer())
        .get(`${endpoint}/${entities.category.shopId}/${Config.apiV1.categories}`)
        .expect(200);
      const expectedCategory: Category = res.body.find(p => p._id === newCategoryRes.body._id);
      expect(expectedCategory).toBeDefined();
      await deleteEntity(
        req(app.getHttpServer()),
        `/${Config.apiV1.categories}/${expectedCategory._id}`,
      );
    });
  });

  describe('GET /id/brands', () => {
    it(`should be able to find brands of entity`, async () => {
      const newBrandRes: { body: Brand } = await req(app.getHttpServer())
        .post(`/${Config.apiV1.brands}`)
        .send(entities.brand)
        .expect(201);
      const res: { body: Brand[] } = await req(app.getHttpServer())
        .get(`${endpoint}/${entities.brand.shopId}/${Config.apiV1.brands}`)
        .expect(200);
      const expectedBrand: Brand = res.body.find(p => p._id === newBrandRes.body._id);
      expect(expectedBrand).toBeDefined();
      await deleteEntity(req(app.getHttpServer()), `/${Config.apiV1.brands}/${expectedBrand._id}`);
    });
  });

  describe('GET /id/users', () => {
    it(`should be able to find users of entity`, async () => {
      const newUserRes: { body: User } = await req(app.getHttpServer())
        .post(`/${Config.apiV1.users}`)
        .send(entities.user())
        .expect(201);
      const res: { body: User[] } = await req(app.getHttpServer())
        .get(`${endpoint}/${entities.user().shopId}/${Config.apiV1.users}`)
        .expect(200);
      const expectedUser: User = res.body.find(p => p._id === newUserRes.body._id);
      expect(expectedUser).toBeDefined();
      await deleteEntity(req(app.getHttpServer()), `/${Config.apiV1.users}/${expectedUser._id}`);
    });
  });

  describe('DELETE /id', () => {
    it(`should delete entity with specified id`, async () => {
      const res: { body: Shop } = await deleteEntity(
        req(app.getHttpServer()),
        `${endpoint}/${currentEntityId}`,
      );
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.name).toBe(nameAfterUpdate);
    });
  });
});
