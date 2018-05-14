"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CrudService {
    constructor(model) {
        this.model = model;
    }
    create(document) {
        const newDocument = new this.model(document);
        return newDocument.save();
    }
    delete() { }
    update() { }
    findAll() { }
    find() { }
}
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map