import { Schema, Document } from 'mongoose';

// Used for plain objects typing
export class ShopDto {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly enabled: boolean;
}

// Used for instantiated mongoose documents
export interface Shop extends Document {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly enabled: boolean;
}

export const ShopSchemaName = 'Shop';

export const ShopSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    description: { type: String, required: false },
    enabled: { type: Boolean, required: false, default: true },
  },
  {
    timestamps: true,
  },
);

// Used in Mongoose options on the module
export const ShopMongooseModuleOpts = {
  name: ShopSchemaName,
  schema: ShopSchema,
};
