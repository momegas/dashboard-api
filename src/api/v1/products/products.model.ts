import { Schema, Document } from 'mongoose';

// Used for plain objects typing
export class ProductDto {
  readonly shopId: string;
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly enabled: boolean;
}

// Used for instantiated mongoose documents
export interface Product extends Document {
  readonly shopId: string;
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly enabled: boolean;
}

export const ProductSchemaName = 'Product';

export const ProductSchema = new Schema(
  {
    shopId: { type: String, required: true },
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
export const ProductMongooseModuleOpts = {
  name: ProductSchemaName,
  schema: ProductSchema,
};
