import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { Creator } from './schema/creator.schema';

@Injectable()
export class CreatorService {
  constructor(@InjectModel(Creator.name) private creatorModel: Model<Creator>) { }


  async create(createCreatorDto: CreateCreatorDto) {
    const creator = await this.creatorModel.create(createCreatorDto);
    return creator._id;
  }

  findAll() {
    return this.creatorModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} creator`;
  }

  update(id: number, updateCreatorDto: UpdateCreatorDto) {
    return `This action updates a #${id} creator`;
  }

  remove(id: number) {
    return `This action removes a #${id} creator`;
  }
}
