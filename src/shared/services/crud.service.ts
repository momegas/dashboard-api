import { Model, Document } from 'mongoose';
import { Component } from '@nestjs/common';

export abstract class CrudService {
  constructor(private readonly repository: Model<Document>) {}

  public create(document: Object): Promise<Document> {
    const newDocument = new this.repository(document);
    return newDocument.save();
  }

  public delete(id: string): Promise<Document> {
    return this.repository.findByIdAndRemove(id).exec();
  }

  public update(id, updatedDocument) {
    return this.repository.findByIdAndUpdate(id, updatedDocument).exec();
  }

  public findAll(): Promise<Document[]> {
    return this.repository.find().exec();
  }

  public findById(id: string): Promise<Document> {
    return this.repository.findById(id).exec();
  }
}
