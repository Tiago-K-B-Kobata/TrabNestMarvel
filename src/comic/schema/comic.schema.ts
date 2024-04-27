import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeriesDocument = HydratedDocument<Comic>;

@Schema({ timestamps: true })
export class Comic {

    @Prop()
    titulo: string;

    @Prop()
    numero: number;

    @Prop()
    description: string;

    @Prop()
    capa: string;

}

export const ComicsSchema = SchemaFactory.createForClass(Comic);
