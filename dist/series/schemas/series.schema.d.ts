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
import { HydratedDocument } from 'mongoose';
export type SeriesDocument = HydratedDocument<Series>;
export declare class Series {
    titulo: string;
    startYear: string;
    endYear: string;
    criadores: {
        nome: string;
        cargo: string;
    }[];
    personagens: {
        nome: string;
        img: string;
    }[];
    comics: string[];
}
export declare const SeriesSchema: import("mongoose").Schema<Series, import("mongoose").Model<Series, any, any, any, import("mongoose").Document<unknown, any, Series> & Series & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Series, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Series>> & import("mongoose").FlatRecord<Series> & {
    _id: import("mongoose").Types.ObjectId;
}>;
