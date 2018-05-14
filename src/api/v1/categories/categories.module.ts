import { SharedModule } from './../../../shared/shared.module';
import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesMongooseModuleOpts } from './categories.model';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [MongooseModule.forFeature([CategoriesMongooseModuleOpts])],
  controllers: [CategoriesController],
  components: [CategoriesService],
})
export class CategoriesModule {}
