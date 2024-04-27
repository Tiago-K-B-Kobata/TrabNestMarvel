"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesModule = void 0;
const common_1 = require("@nestjs/common");
const series_controller_1 = require("./series.controller");
const series_service_1 = require("./series.service");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const series_schema_1 = require("./schemas/series.schema");
const personagem_schema_1 = require("../personagem/schema/personagem.schema");
const personagem_module_1 = require("../personagem/personagem.module");
const comic_module_1 = require("../comic/comic.module");
const creator_module_1 = require("../creator/creator.module");
let SeriesModule = class SeriesModule {
};
exports.SeriesModule = SeriesModule;
exports.SeriesModule = SeriesModule = __decorate([
    (0, common_1.Module)({
        controllers: [series_controller_1.SeriesController],
        providers: [series_service_1.SeriesService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: series_schema_1.Series.name, schema: series_schema_1.SeriesSchema }, { name: personagem_schema_1.Personagem.name, schema: personagem_schema_1.PersonagemSchema }]),
            axios_1.HttpModule,
            personagem_module_1.PersonagemModule,
            comic_module_1.ComicModule,
            creator_module_1.CreatorModule,
        ],
    })
], SeriesModule);
//# sourceMappingURL=series.module.js.map