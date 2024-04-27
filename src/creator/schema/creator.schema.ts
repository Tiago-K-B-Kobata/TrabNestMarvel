import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PersonagemDocument = HydratedDocument<Creator>;

@Schema()
export class Creator {

    @Prop({ required: true })
    nome: string;

    @Prop()
    role: string;

    @Prop()
    comics: string[];

}

export const CreatorSchema = SchemaFactory.createForClass(Creator);
