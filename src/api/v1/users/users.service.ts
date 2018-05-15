import { Model, Document } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from 'shared/services/crud/crud.service';
import { UserSchema, User } from './users.model';

@Component()
export class UsersService extends CrudService {
  constructor(@InjectModel(UserSchema) private readonly usersRepository: Model<User>) {
    super(usersRepository);
  }
}
