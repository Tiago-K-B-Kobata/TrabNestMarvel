import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Series, SeriesSchema } from './schemas/series.schema';
import { Personagem, PersonagemSchema } from 'src/personagem/schema/personagem.schema';
import { PersonagemModule } from 'src/personagem/personagem.module';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [
    MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }, { name: Personagem.name, schema: PersonagemSchema }]),
    HttpModule,
    PersonagemModule,
  ],
})
export class SeriesModule { }
