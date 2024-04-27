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
import mongoose, { HydratedDocument } from 'mongoose';
import { Comic } from 'src/comic/schema/comic.schema';
import { Creator } from 'src/creator/schema/creator.schema';
import { Personagem } from 'src/personagem/schema/personagem.schema';
export type SeriesDocument = HydratedDocument<Series>;
export declare class Series {
    titulo: string;
    startYear: string;
    endYear: string;
    criadores: Creator[];
    personagens: Personagem[];
    comics: Comic[];
}
export declare const SeriesSchema: mongoose.Schema<Series, mongoose.Model<Series, any, any, any, mongoose.Document<unknown, any, Series> & Series & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Series, mongoose.Document<unknown, {}, mongoose.FlatRecord<Series>> & mongoose.FlatRecord<Series> & {
    _id: mongoose.Types.ObjectId;
}>;
