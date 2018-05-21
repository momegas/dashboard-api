import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from '../../../shared/services/crud/crud.service';
import { FileSchemaName, FileDocument, FileDto } from './files.model';
import { FileSystemService } from '../../../shared/services/fileSystem/fileSystem.service';
import { Express } from 'express';

@Injectable()
export class FilesService extends CrudService {
  constructor(
    @InjectModel(FileSchemaName) private readonly filesRepository: Model<FileDocument>,
    private readonly fileSystemService: FileSystemService,
  ) {
    super(filesRepository);
  }

  async upload(file: Express.Multer.File, shopId: string): Promise<FileDocument> {
    const name = await this.fileSystemService.createFile(file);
    const fileDbEntity: FileDto = {
      name,
      shopId,
    };
    try {
      const newDocument = new this.filesRepository(fileDbEntity);
      return await newDocument.save();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
