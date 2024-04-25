import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { apikey } from 'src/auth/constants';
import { CreateSeriesDto } from './dtos/create-series-dto';
import { Series } from './schemas/series.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeriesService {
    constructor(@InjectModel(Series.name) private seriesModel: Model<Series>) { }
    httpService = new HttpService();

    async getSeriesData() {
        const url = `${apikey.base_URL}series/1067?ts=1&apikey=${apikey.publicKey}&hash=${apikey.hash}`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        const seriesData = data.data.results[0];
        let series: CreateSeriesDto = {

            titulo: '',

            startYear: '',

            endYear: '',


            criadores: [{
                nome: '',
                cargo: '',
            }],


            personagens: [{
                nome: '',
                img: '',
            }],

            comics: [''],

        };

        series.titulo = seriesData.title;
        series.startYear = seriesData.startYear;
        series.endYear = seriesData.endYear;
        series.criadores = seriesData.creators.items.map((e) => {
            return {
                nome: e.name,
                cargo: e.role
            };
        }
        );

        series.personagens = await Promise.all(seriesData.characters.items.map(async (e) => {
            const img = await this.getCharacterImage(e);
            return {
                nome: e.name,
                img: img
            };
        }));

        series.comics = seriesData.comics.items.map((e) => e.name);

        this.seriesModel.create(series);

    }

    findAll() {
        return this.seriesModel.find().exec();
    }

    findAllComics() {
        return this.seriesModel.find().select("comics").exec();
    }

    findAllCreators() {
        return this.seriesModel.find().select("criadores").exec();
    }

    findAllCharacters() {
        return this.seriesModel.find().select("personagens").exec();
    }


    async getCharacterImage(e) {
        const { data } = await firstValueFrom(this.httpService.get(`${e.resourceURI}?ts=1&apikey=${apikey.publicKey}&hash=${apikey.hash}`));
        const image = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`;
        return image;
    }

}
