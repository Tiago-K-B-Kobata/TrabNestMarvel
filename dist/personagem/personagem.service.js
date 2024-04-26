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
exports.PersonagemService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const personagem_schema_1 = require("./schema/personagem.schema");
const mongoose_2 = require("mongoose");
let PersonagemService = class PersonagemService {
    constructor(personagemModel) {
        this.personagemModel = personagemModel;
    }
    async create(createPersonagemDto) {
        const personagem = await this.personagemModel.create(createPersonagemDto);
        return personagem._id;
    }
    findAll() {
        return this.personagemModel.find().exec();
    }
    findById(id) {
        return this.personagemModel.findById(id);
    }
};
exports.PersonagemService = PersonagemService;
exports.PersonagemService = PersonagemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(personagem_schema_1.Personagem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonagemService);
//# sourceMappingURL=personagem.service.js.map