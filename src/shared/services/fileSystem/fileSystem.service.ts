import { FileDocument } from './../../../api/v1/files/files.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Express } from 'express';

@Injectable()
export class FileSystemService {
  constructor() {}

  public async createFile(file: Express.Multer.File): Promise<boolean> {
    fs.writeFile(`${__dirname}../../../../public/files/${file.originalname}`, file.buffer, err => {
      if (err) {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    });
    return true;
  }
}
