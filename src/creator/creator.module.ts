import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Creator, CreatorSchema } from './schema/creator.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Creator.name, schema: CreatorSchema }])],
  controllers: [CreatorController],
  providers: [CreatorService],
  exports: [CreatorService]
})
export class CreatorModule { }
