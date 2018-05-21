import { FileDocument } from './../../../api/v1/files/files.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Express } from 'express';

@Injectable()
export class FileSystemService {
  constructor() {}

  public async createFile(file: Express.Multer.File): Promise<string> {
    const fileName = this.generateFileName(file.originalname);
    fs.writeFile(`${process.cwd()}/src/public/files/${fileName}`, file.buffer, err => {
      if (err) {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    });
    return fileName;
  }

  private generateFileName(fileName: string): string {
    const splitedName: string[] = fileName.split('.');
    const type = splitedName.pop();

    return `${splitedName.join('.')}-${new Date().toISOString()}.${type}`;
  }
}
