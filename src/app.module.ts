import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BrandsModule } from 'api/v1/brands/brands.module';
import { CategoriesModule } from 'api/v1/categories/categories.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    BrandsModule,
    CategoriesModule,
    SharedModule,
  ],
  controllers: [],
  components: [],
})
export class AppModule {}
