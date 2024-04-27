import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Comic } from 'src/comic/schema/comic.schema';
import { Creator } from 'src/creator/schema/creator.schema';
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

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Creator' }] })
    criadores: Creator[];

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Personagem' }] })
    personagens: Personagem[];

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comic' }] })
    comics: Comic[];
}

export const SeriesSchema = SchemaFactory.createForClass(Series);
