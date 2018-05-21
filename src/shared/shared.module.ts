import { Module, Global } from '@nestjs/common';
import { CrudService } from './services/crud/crud.service';
import { FileSystemService } from './services/fileSystem/fileSystem.service';

@Global()
@Module({
  providers: [FileSystemService],
  imports: [FileSystemService],
  exports: [FileSystemService],
})
export class SharedModule {}
