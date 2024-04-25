import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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

    @Prop({ required: true })
    personagens: {
        nome: string;
        img: string;
    }[];

    @Prop({ required: true })
    comics: string[];
}

export const SeriesSchema = SchemaFactory.createForClass(Series);
