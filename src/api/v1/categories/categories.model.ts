import { Schema, Document } from 'mongoose';

// Used for plain objects typing
export class CategoryDto {
  readonly shopId: string;
  readonly name: string;
  readonly slug: string;
  readonly parentId: string;
  readonly description: string;
  readonly enabled: boolean;
}

// Used for instanciated mongoose documents
export interface Category extends Document {
  readonly shopId: string;
  readonly name: string;
  readonly slug: string;
  readonly parentId: string;
  readonly description: string;
  readonly enabled: boolean;
}

export const CategorySchemaName = 'Category';

export const CategorySchema = new Schema(
  {
    shopId: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    parentId: { type: String, required: false },
    description: { type: String, required: false },
    enabled: { type: Boolean, required: false, default: true },
  },
  {
    timestamps: true,
  },
);

// Used in Mongoose options on the module
export const CategoriesMongooseModuleOpts = {
  name: CategorySchemaName,
  schema: CategorySchema,
};
