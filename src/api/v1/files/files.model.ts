import { Schema, Document } from 'mongoose';

// Used for plain objects typing
export class FileDto {
  readonly shopId: string;
  readonly name: string;
  readonly description?: string;
}

// Used for instantiated mongoose documents
export interface FileDocument extends Document {
  readonly shopId: string;
  readonly name: string;
  readonly description?: string;
}

export const FileSchemaName = 'File';

export const FileSchema = new Schema(
  {
    shopId: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

// Used in Mongoose options on the module
export const FilesMongooseModuleOpts = {
  name: FileSchemaName,
  schema: FileSchema,
};
