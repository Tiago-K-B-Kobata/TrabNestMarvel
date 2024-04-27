import { Module } from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicController } from './comic.controller';
import { Comic, ComicsSchema } from './schema/comic.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Comic.name, schema: ComicsSchema }])],
  controllers: [ComicController],
  providers: [ComicService],
  exports: [ComicService]
})
export class ComicModule { }
