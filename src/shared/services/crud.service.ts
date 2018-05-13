import { Model, Document } from 'mongoose';
import { Component } from '@nestjs/common';

@Component()
export class CrudService {
  constructor(private readonly model: Model<Document>) {}

  public create(document: any): Promise<any> {
    const newDocument = new this.model(document);
    return newDocument.save();
  }

  public delete() {}
  public update() {}
  public findAll() {}
  public find() {}
}
