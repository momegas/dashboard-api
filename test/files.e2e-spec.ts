import { MongooseModule } from '@nestjs/mongoose';
import Config from '../src/config';
import { RestApiV1Module } from '../src/api/v1/restApiV1.module';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
const req = require('supertest');
import * as entities from './entities';

describe.only('Files', () => {
  let app: INestApplication;
  let currentEntityId = null;
  const endpoint = `/${Config.apiV1.files}`;
  const nameAfterUpdate = 'test2';

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [MongooseModule.forRoot(Config.databases.mongo.url), RestApiV1Module],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => await app.close());

  describe('POST /shopId', () => {
    it(`should create new entity`, async () => {
      const res = await req(app.getHttpServer())
        .post(`${endpoint}/${1}`)
        .field('name', 'file')
        .attach('Desert', 'test/fixtures/Desert.jpg');
      // .expect(201);
      console.log(res);
      currentEntityId = res.body._id;
      expect(res.body.name).toBe(entities.brand.name);
    });
  });

  describe('GET', () => {
    it(`should get all entities`, async () => {
      const res = await req(app.getHttpServer())
        .get(endpoint)
        .expect(200);
      const currentEntity = res.body.find(entity => entity._id === currentEntityId);
      expect(currentEntity.name).toBe(entities.brand.name);
    });
  });

  describe('GET /id', () => {
    it(`should get entity with specified id`, async () => {
      const res = await req(app.getHttpServer())
        .get(`${endpoint}/${currentEntityId}`)
        .expect(200);
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.name).toBe(entities.brand.name);
    });
  });

  describe('PUT /id', () => {
    it(`should update entity with specified id`, async () => {
      const res = await req(app.getHttpServer())
        .put(`${endpoint}/${currentEntityId}`)
        .send({ name: nameAfterUpdate })
        .expect(200);
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.name).toBe(entities.brand.name);
    });
  });

  describe('DELETE /id', () => {
    it(`should delete entity with specified id`, async () => {
      const res = await req(app.getHttpServer())
        .delete(`${endpoint}/${currentEntityId}`)
        .expect(200);
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.name).toBe(nameAfterUpdate);
    });
  });
});
