import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Series, SeriesSchema } from './schemas/series.schema';
import { Personagem, PersonagemSchema } from 'src/personagem/schema/personagem.schema';
import { PersonagemModule } from 'src/personagem/personagem.module';
import { ComicModule } from 'src/comic/comic.module';
import { CreatorModule } from 'src/creator/creator.module';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [
    MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }, { name: Personagem.name, schema: PersonagemSchema }]),
    HttpModule,
    PersonagemModule,
    ComicModule,
    CreatorModule,
  ],
})
export class SeriesModule { }
