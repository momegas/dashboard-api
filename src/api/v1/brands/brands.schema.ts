import * as mongoose from 'mongoose';

export const BrandSchemaName = 'Brand';
export const BrandSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
  },
  {
    timestamps: true,
  },
);
