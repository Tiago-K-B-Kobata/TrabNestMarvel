import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PersonagemDocument = HydratedDocument<Personagem>;

@Schema({ timestamps: true })
export class Personagem {

    @Prop({ required: true })
    nome: string;

    @Prop()
    img: string;

    @Prop()
    description: string;
}

export const PersonagemSchema = SchemaFactory.createForClass(Personagem);
