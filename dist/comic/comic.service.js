"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComicService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comic_schema_1 = require("./schema/comic.schema");
let ComicService = class ComicService {
    constructor(comicModel) {
        this.comicModel = comicModel;
    }
    async create(createComicDto) {
        const comic = await this.comicModel.create(createComicDto);
        return comic._id;
    }
    findAll() {
        return this.comicModel.find().exec();
    }
    async findAmount() {
        const comics = await this.comicModel.find().exec();
        return comics.length;
    }
    findOne(id) {
        return this.comicModel.findById(id);
    }
    update(id, updateComicDto) {
        return `This action updates a #${id} comic`;
    }
    remove(id) {
        return `This action removes a #${id} comic`;
    }
};
exports.ComicService = ComicService;
exports.ComicService = ComicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comic_schema_1.Comic.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ComicService);
//# sourceMappingURL=comic.service.js.map