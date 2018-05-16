import { RestApiV1Module } from './api/v1/restApiV1.module';
import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import Config from './config';

@Module({
  imports: [MongooseModule.forRoot(Config.databases.mongo.url), RestApiV1Module, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
