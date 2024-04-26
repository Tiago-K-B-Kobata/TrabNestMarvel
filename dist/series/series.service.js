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
exports.SeriesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const constants_1 = require("../auth/constants");
const series_schema_1 = require("./schemas/series.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const personagem_service_1 = require("../personagem/personagem.service");
let SeriesService = class SeriesService {
    constructor(seriesModel, personagemService) {
        this.seriesModel = seriesModel;
        this.personagemService = personagemService;
        this.httpService = new axios_1.HttpService();
    }
    async getCharacterData(e) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${e.resourceURI}?ts=1&apikey=${constants_1.apikey.publicKey}&hash=${constants_1.apikey.hash}`));
        const image = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`;
        const description = data.data.results[0].description;
        return {
            image: image,
            description: description
        };
    }
    async getSeriesData() {
        try {
            const url = `${constants_1.apikey.base_URL}series/1067?ts=1&apikey=${constants_1.apikey.publicKey}&hash=${constants_1.apikey.hash}`;
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            const seriesData = data.data.results[0];
            let series = {
                titulo: '',
                startYear: '',
                endYear: '',
                criadores: [{
                        nome: '',
                        cargo: '',
                    }],
                personagens: [{
                        nome: '',
                        img: '',
                        description: ''
                    }],
                comics: [''],
            };
            series.titulo = seriesData.title;
            series.startYear = seriesData.startYear;
            series.endYear = seriesData.endYear;
            series.criadores = seriesData.creators.items.map((e) => {
                return {
                    nome: e.name,
                    cargo: e.role
                };
            });
            series.personagens = await Promise.all(seriesData.characters.items.map(async (e) => {
                const charData = await this.getCharacterData(e);
                let char = {
                    nome: e.name,
                    img: charData.image,
                    description: charData.description
                };
                const createdPersonagem = this.personagemService.create(char);
                return createdPersonagem;
            }));
            series.comics = seriesData.comics.items.map((e) => e.name);
            this.seriesModel.create(series);
            return "Serie Cadastrada";
        }
        catch (erro) {
            console.log(erro);
        }
    }
    findAll() {
        return this.seriesModel.find().exec();
    }
    findAllComics() {
        return this.seriesModel.find().select("comics").exec();
    }
    findAllCreators() {
        return this.seriesModel.find().select("criadores").exec();
    }
    findAllCharacters() {
        return this.personagemService.findAll();
    }
    findCharacterById(id) {
        return this.personagemService.findById(id);
    }
};
exports.SeriesService = SeriesService;
exports.SeriesService = SeriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(series_schema_1.Series.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, personagem_service_1.PersonagemService])
], SeriesService);
//# sourceMappingURL=series.service.js.map