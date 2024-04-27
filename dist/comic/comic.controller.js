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
exports.ComicController = void 0;
const common_1 = require("@nestjs/common");
const comic_service_1 = require("./comic.service");
const create_comic_dto_1 = require("./dto/create-comic.dto");
const update_comic_dto_1 = require("./dto/update-comic.dto");
let ComicController = class ComicController {
    constructor(comicService) {
        this.comicService = comicService;
    }
    create(createComicDto) {
        return this.comicService.create(createComicDto);
    }
    findAll() {
        return this.comicService.findAll();
    }
    findOne(id) {
        return this.comicService.findOne(id);
    }
    update(id, updateComicDto) {
        return this.comicService.update(id, updateComicDto);
    }
    remove(id) {
        return this.comicService.remove(id);
    }
};
exports.ComicController = ComicController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comic_dto_1.CreateComicDto]),
    __metadata("design:returntype", void 0)
], ComicController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComicController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComicController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comic_dto_1.UpdateComicDto]),
    __metadata("design:returntype", void 0)
], ComicController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComicController.prototype, "remove", null);
exports.ComicController = ComicController = __decorate([
    (0, common_1.Controller)('comic'),
    __metadata("design:paramtypes", [comic_service_1.ComicService])
], ComicController);
//# sourceMappingURL=comic.controller.js.map