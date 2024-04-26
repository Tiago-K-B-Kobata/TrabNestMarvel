import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { Personagem, PersonagemSchema } from './schema/personagem.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Personagem.name, schema: PersonagemSchema }])],
  controllers: [PersonagemController],
  providers: [PersonagemService],
  exports: [PersonagemService]
})
export class PersonagemModule { }
