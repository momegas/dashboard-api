import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from '../../../shared/services/crud/crud.service';
import { User, UserSchemaName } from './users.model';

@Injectable()
export class UsersService extends CrudService {
  constructor(@InjectModel(UserSchemaName) private readonly usersRepository: Model<User>) {
    super(usersRepository);
  }
}
