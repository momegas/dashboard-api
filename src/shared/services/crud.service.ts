import { Model, Document } from 'mongoose';
import { Component, HttpException, HttpStatus } from '@nestjs/common';

export abstract class CrudService {
  constructor(private readonly repository: Model<Document>) {}

  async findAllOfShop(shipId: string): Promise<Document[]> {
    try {
      return await this.repository.find().exec();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  public async findAll(): Promise<Document[]> {
    try {
      return await this.repository.find().exec();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  public async findById(id: string): Promise<Document> {
    try {
      return await this.repository.findById(id).exec();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  public async create(document: Object): Promise<Document> {
    try {
      const newDocument = new this.repository(document);
      return await newDocument.save();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  public async delete(id: string): Promise<Document> {
    try {
      return await this.repository.findByIdAndRemove(id).exec();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  public async update(id, updatedDocument) {
    try {
      return await this.repository
        .findByIdAndUpdate(id, updatedDocument)
        .exec();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
