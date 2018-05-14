import * as mongoose from 'mongoose';

// Used for plain objects typing
export class BrandDto {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly enabled: boolean;
}

// Used for instanciated mongoose documents
export interface Brand extends mongoose.Document {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly enabled: boolean;
}

export const BrandSchemaName = 'Brand';

export const BrandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: false },
    enabled: { type: Boolean, required: false, default: true },
  },
  {
    timestamps: true,
  },
);

// Used in Mongoose options on the module
export const BrandsMongooseModuleOpts = {
  name: BrandSchemaName,
  schema: BrandSchema,
};
