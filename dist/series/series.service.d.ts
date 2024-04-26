/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpService } from '@nestjs/axios';
import { Series } from './schemas/series.schema';
import { Model } from 'mongoose';
import { PersonagemService } from 'src/personagem/personagem.service';
export declare class SeriesService {
    private seriesModel;
    private readonly personagemService;
    constructor(seriesModel: Model<Series>, personagemService: PersonagemService);
    httpService: HttpService;
    getCharacterData(e: any): Promise<{
        image: string;
        description: any;
    }>;
    getSeriesData(): Promise<string>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Series> & Series & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAllComics(): Promise<(import("mongoose").Document<unknown, {}, Series> & Series & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAllCreators(): Promise<(import("mongoose").Document<unknown, {}, Series> & Series & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAllCharacters(): Promise<(import("mongoose").Document<unknown, {}, import("../personagem/schema/personagem.schema").Personagem> & import("../personagem/schema/personagem.schema").Personagem & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findCharacterById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("../personagem/schema/personagem.schema").Personagem> & import("../personagem/schema/personagem.schema").Personagem & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("../personagem/schema/personagem.schema").Personagem> & import("../personagem/schema/personagem.schema").Personagem & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../personagem/schema/personagem.schema").Personagem, "findOne">;
}
