"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const brands_controller_1 = require("./brands.controller");
const common_1 = require("@nestjs/common");
const brands_schema_1 = require("./brands.schema");
const brands_service_1 = require("./brands.service");
const mongoose_1 = require("@nestjs/mongoose");
let BrandsModule = class BrandsModule {
};
BrandsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: brands_schema_1.BrandSchemaName, schema: brands_schema_1.BrandSchema }]),
        ],
        controllers: [brands_controller_1.BrandsController],
        components: [brands_service_1.BrandsService],
    })
], BrandsModule);
exports.BrandsModule = BrandsModule;
//# sourceMappingURL=brands.module.js.map