import { PasswordUtils } from './../../../shared/utils/password/password.utils';
import * as mongoose from 'mongoose';

// Used for plain objects typing
export class UserDto {
  readonly shopId: string;
  readonly username: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly enabled: boolean;
}

// Used for instantiated mongoose documents
export interface User extends mongoose.Document {
  readonly shopId: string;
  readonly username: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly enabled: boolean;
}

export const UserSchemaName = 'User';

export const UserSchema = new mongoose.Schema(
  {
    shopId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    enabled: { type: Boolean, required: false, default: true },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function<User>(next) {
  const hash = await PasswordUtils.hash(this.password);
  this.password = hash;
  next();
});

// Used in Mongoose options on the module
export const UserMongooseModuleOpts = {
  name: UserSchemaName,
  schema: UserSchema,
};
