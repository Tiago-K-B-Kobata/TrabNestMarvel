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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { SeriesService } from './series.service';
export declare class SeriesController {
    private readonly seriesService;
    constructor(seriesService: SeriesService);
    create(): Promise<string>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/series/schemas/series.schema").Series> & import("src/series/schemas/series.schema").Series & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findComics(): Promise<(import("mongoose").Document<unknown, {}, import("src/comic/schema/comic.schema").Comic> & import("src/comic/schema/comic.schema").Comic & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findCreators(): Promise<(import("mongoose").Document<unknown, {}, import("src/creator/schema/creator.schema").Creator> & import("src/creator/schema/creator.schema").Creator & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findCharacters(): Promise<(import("mongoose").Document<unknown, {}, import("src/personagem/schema/personagem.schema").Personagem> & import("src/personagem/schema/personagem.schema").Personagem & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findCharacter(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/personagem/schema/personagem.schema").Personagem> & import("src/personagem/schema/personagem.schema").Personagem & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("src/personagem/schema/personagem.schema").Personagem> & import("src/personagem/schema/personagem.schema").Personagem & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("src/personagem/schema/personagem.schema").Personagem, "findOne">;
    findComicsAmount(): Promise<number>;
}
