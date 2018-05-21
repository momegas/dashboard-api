import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from '../../../shared/services/crud/crud.service';
import { FileSchemaName, FileDocument, FileDto } from './files.model';
import { FileSystemService } from 'shared/services/fileSystem/fileSystem.service';

@Injectable()
export class FilesService extends CrudService {
  constructor(
    @InjectModel(FileSchemaName) private readonly filesRepository: Model<FileDocument>,
    private readonly fileSystemService: FileSystemService,
  ) {
    super(filesRepository);
  }

  // ieldname: 'file',
  // originalname: 'Desert.jpg',
  // encoding: '7bit',
  // mimetype: 'image/jpeg',
  // buffer:
  async create(file): Promise<FileDocument> {
    console.log(file);
    // Save item in fsystem
    this.fileSystemService.createFile(file.buffer);
    const fileDbEntity: FileDto = {
      name: file.originalname,
      shopId: '1',
    };
    try {
      console.log('saving');
      const newDocument = new this.filesRepository(fileDbEntity);
      return await newDocument.save();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
