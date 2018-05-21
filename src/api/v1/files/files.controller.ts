import Config from '../../../config';
import {
  Get,
  Controller,
  Inject,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { FilesService } from './files.service';
import { FileDto } from './files.model';

@Controller(Config.apiV1.files)
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        files: 1,
        fileSize: 5 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10000, // 50 mb in bytes
      },
    }),
  )
  async create(@UploadedFile() file) {
    return await this.filesService.create(file);
  }

  @Get()
  async findAll() {
    return await this.filesService.findAll();
  }

  @Get(':id')
  async findById(@Param() params) {
    return await this.filesService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.filesService.delete(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() fileDto: FileDto) {
    return await this.filesService.update(params.id, fileDto);
  }
}
