import { Injectable } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Personagem } from './schema/personagem.schema';
import { Model } from 'mongoose';

@Injectable()
export class PersonagemService {
  constructor(@InjectModel(Personagem.name) private personagemModel: Model<Personagem>) { }

  async create(createPersonagemDto: CreatePersonagemDto) {
    const personagem = await this.personagemModel.create(createPersonagemDto);
    return personagem._id;
  }

  findAll() {
    return this.personagemModel.find().exec();
  }

  findById(id: string) {
    return this.personagemModel.findById(id);
  }

}
