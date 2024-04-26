import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { apikey } from 'src/auth/constants';
import { CreateSeriesDto } from './dtos/create-series-dto';
import { Series } from './schemas/series.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonagemDto } from 'src/personagem/dto/create-personagem.dto';
import { PersonagemService } from 'src/personagem/personagem.service';

@Injectable()
export class SeriesService {
    constructor(@InjectModel(Series.name) private seriesModel: Model<Series>, private readonly personagemService: PersonagemService) { }

    httpService = new HttpService();

    async getCharacterData(e) {
        const { data } = await firstValueFrom(this.httpService.get(`${e.resourceURI}?ts=1&apikey=${apikey.publicKey}&hash=${apikey.hash}`));
        const image = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`;
        const description = data.data.results[0].description;
        return {
            image: image,
            description: description
        };
    }

    async getSeriesData() {
        try {


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
                    description: ''
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

                const charData = await this.getCharacterData(e);
                let char: CreatePersonagemDto = {
                    nome: e.name,
                    img: charData.image,
                    description: charData.description
                };
                const createdPersonagem = this.personagemService.create(char);
                return createdPersonagem;
            }));

            series.comics = seriesData.comics.items.map((e) => e.name);

            this.seriesModel.create(series);
            return "Serie Cadastrada";
        } catch (erro) {
            console.log(erro);
        }
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
        return this.personagemService.findAll();
    }

    findCharacterById(id: string) {
        return this.personagemService.findById(id);
    }

}
