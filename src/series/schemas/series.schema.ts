import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Personagem } from 'src/personagem/schema/personagem.schema';

export type SeriesDocument = HydratedDocument<Series>;

@Schema({ timestamps: true })
export class Series {
    @Prop({ required: true })
    titulo: string;

    @Prop({ required: true })
    startYear: string;

    @Prop({ required: true })
    endYear: string;

    @Prop({ required: true })
    criadores: {
        nome: string;
        cargo: string;
    }[];

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Personagem' }] })
    personagens: Personagem[];

    @Prop({ required: true })
    comics: string[];
}

export const SeriesSchema = SchemaFactory.createForClass(Series);
