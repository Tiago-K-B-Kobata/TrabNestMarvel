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
import { CreateComicDto } from 'src/comic/dto/create-comic.dto';
import { ComicService } from 'src/comic/comic.service';
import { CreateCreatorDto } from 'src/creator/dto/create-creator.dto';
import { CreatorService } from 'src/creator/creator.service';

@Injectable()
export class SeriesService {
    constructor(@InjectModel(Series.name) private seriesModel: Model<Series>,
        private readonly personagemService: PersonagemService,
        private readonly comicService: ComicService,
        private readonly creatorService: CreatorService
    ) { }

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

    async getComicData(e) {
        const { data } = await firstValueFrom(this.httpService.get(`${e.resourceURI}?ts=1&apikey=${apikey.publicKey}&hash=${apikey.hash}`));
        const image = `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`;
        const description = data.data.results[0].description;
        const title = data.data.results[0].title;
        const issue = data.data.results[0].issueNumber;
        return {
            titulo: title,
            numero: issue,
            description: description,
            capa: image,
        };
    }

    async getCreatorData(e) {
        const { data } = await firstValueFrom(this.httpService.get(`${e.resourceURI}?ts=1&apikey=${apikey.publicKey}&hash=${apikey.hash}`));
        const name = data.data.results[0].fullName;
        const comics = data.data.results[0].comics.items.map((e) => e.name);
        return {
            nome: name,
            comics: comics
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
            series.criadores = await Promise.all(seriesData.creators.items.map(async (e) => {

                const creatorData = await this.getCreatorData(e);
                let creator: CreateCreatorDto = {
                    nome: creatorData.nome,
                    role: e.role,
                    comics: creatorData.comics
                };
                const createdCreator = this.creatorService.create(creator);
                return createdCreator;
            }));

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

            series.comics = await Promise.all(seriesData.comics.items.map(async (e) => {

                const comicData = await this.getComicData(e);
                let comi: CreateComicDto = {
                    titulo: comicData.titulo,
                    numero: comicData.numero,
                    description: comicData.description,
                    capa: comicData.capa
                };
                const createdComic = this.comicService.create(comi);
                return createdComic;
            }));

            this.seriesModel.create(series);
            return "Serie Cadastrada";
        } catch (erro) {
            console.log(erro);
        }
    }

    findAll() {
        return this.seriesModel.find().exec();
    }

    findAllCreators() {
        return this.creatorService.findAll();
    }

    findAllCharacters() {
        return this.personagemService.findAll();
    }

    findAllComics() {
        return this.comicService.findAll();
    }

    findComicsAmount() {
        return this.comicService.findAmount();
    }

    findCharacterById(id: string) {
        return this.personagemService.findById(id);
    }

}
