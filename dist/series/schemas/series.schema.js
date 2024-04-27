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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesSchema = exports.Series = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Series = class Series {
};
exports.Series = Series;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Series.prototype, "titulo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Series.prototype, "startYear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Series.prototype, "endYear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Creator' }] }),
    __metadata("design:type", Array)
], Series.prototype, "criadores", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Personagem' }] }),
    __metadata("design:type", Array)
], Series.prototype, "personagens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Comic' }] }),
    __metadata("design:type", Array)
], Series.prototype, "comics", void 0);
exports.Series = Series = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Series);
exports.SeriesSchema = mongoose_1.SchemaFactory.createForClass(Series);
//# sourceMappingURL=series.schema.js.map