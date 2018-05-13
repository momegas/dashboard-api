import { SharedModule } from './../../../shared/shared.module';
import { BrandsController } from './brands.controller';
import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { BrandSchema, BrandSchemaName } from './brands.schema';
import { BrandsService } from './brands.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BrandSchemaName, schema: BrandSchema }]),
  ],
  controllers: [BrandsController],
  components: [BrandsService],
})
export class BrandsModule {}
