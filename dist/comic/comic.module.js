"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComicModule = void 0;
const common_1 = require("@nestjs/common");
const comic_service_1 = require("./comic.service");
const comic_controller_1 = require("./comic.controller");
const comic_schema_1 = require("./schema/comic.schema");
const mongoose_1 = require("@nestjs/mongoose");
let ComicModule = class ComicModule {
};
exports.ComicModule = ComicModule;
exports.ComicModule = ComicModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: comic_schema_1.Comic.name, schema: comic_schema_1.ComicsSchema }])],
        controllers: [comic_controller_1.ComicController],
        providers: [comic_service_1.ComicService],
        exports: [comic_service_1.ComicService]
    })
], ComicModule);
//# sourceMappingURL=comic.module.js.map