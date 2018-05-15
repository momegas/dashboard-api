import { Module, Global } from '@nestjs/common';
import { CrudService } from './services/crud/crud.service';

@Global()
@Module({
  imports: [],
  exports: [],
})
export class SharedModule {}
