import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Series, SeriesSchema } from './schemas/series.schema';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [
    MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }]),
    HttpModule,
  ],
})
export class SeriesModule {}
