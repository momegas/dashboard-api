import { UserDto } from './../src/api/v1/users/users.model';
import { RestApiV1Module } from './../src/api/v1/restApiV1.module';
const req = require('supertest');
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import Config from '../src/config';

describe('Users', () => {
  let app: INestApplication;
  let currentEntityId = null;
  const endpoint = `/${Config.apiV1.users}`;
  const user: UserDto = {
    name: 'test',
    email: 'test',
    password: 'test',
    shopId: '1',
    username: 'test',
  };
  const nameAfterUpdate = 'test2';

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [MongooseModule.forRoot(Config.databases.mongo.url), RestApiV1Module],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => await app.close());

  describe('POST', () => {
    it(`should create new entity`, async () => {
      const res = await req(app.getHttpServer())
        .post(endpoint)
        .send(user)
        .expect(201);
      currentEntityId = res.body._id;
      expect(res.body.name).toBe(user.name);
    });
  });

  describe('GET', () => {
    it(`should get all entities`, async () => {
      const res = await req(app.getHttpServer())
        .get(endpoint)
        .expect(200);
      const currentEntity = res.body.find(entity => entity._id === currentEntityId);
      expect(currentEntity.name).toBe(user.name);
    });
  });

  describe('GET /id', () => {
    it(`should get entity with specified id`, async () => {
      const res = await req(app.getHttpServer())
        .get(`${endpoint}/${currentEntityId}`)
        .expect(200);
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.name).toBe(user.name);
    });
  });

  describe('PUT /id', () => {
    it(`should update entity with specified id`, async () => {
      const res = await req(app.getHttpServer())
        .put(`${endpoint}/${currentEntityId}`)
        .send({ name: nameAfterUpdate })
        .expect(200);
      expect(res.body._id).toBe(currentEntityId);
      expect(res.body.name).toBe(user.name);
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
