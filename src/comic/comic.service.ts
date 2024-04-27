import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { Comic } from './schema/comic.schema';

@Injectable()
export class ComicService {
  constructor(@InjectModel(Comic.name) private comicModel: Model<Comic>) { }


  async create(createComicDto: CreateComicDto) {
    const comic = await this.comicModel.create(createComicDto);
    return comic._id;
  }

  findAll() {
    return this.comicModel.find().exec();
  }

  async findAmount() {
    const comics = await this.comicModel.find().exec();
    return comics.length;
  }

  findOne(id: string) {
    return this.comicModel.findById(id);
  }

  update(id: string, updateComicDto: UpdateComicDto) {
    return `This action updates a #${id} comic`;
  }

  remove(id: string) {
    return `This action removes a #${id} comic`;
  }
}
