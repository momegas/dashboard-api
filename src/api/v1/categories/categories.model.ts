import * as mongoose from 'mongoose';

// Used for plain objects typing
export class CategoryDto {
  readonly name: string;
  readonly slug: string;
  readonly parentId: string;
  readonly description: string;
  readonly enabled: boolean;
}

// Used for instanciated mongoose documents
export interface Category extends mongoose.Document {
  readonly name: string;
  readonly slug: string;
  readonly parentId: string;
  readonly description: string;
  readonly enabled: boolean;
}

export const CategorySchemaName = 'Category';

export const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
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
