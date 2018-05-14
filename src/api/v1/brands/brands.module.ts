import { SharedModule } from './../../../shared/shared.module';
import { BrandsController } from './brands.controller';
import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { BrandsMongooseModuleOpts } from './brands.model';
import { BrandsService } from './brands.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([BrandsMongooseModuleOpts])],
  controllers: [BrandsController],
  components: [BrandsService],
})
export class BrandsModule {}
