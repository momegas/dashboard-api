"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.BrandSchemaName = 'Brand';
exports.BrandSchema = new mongoose.Schema({
    name: String,
    slug: String,
}, {
    timestamps: true,
});
//# sourceMappingURL=brands.schema.js.map