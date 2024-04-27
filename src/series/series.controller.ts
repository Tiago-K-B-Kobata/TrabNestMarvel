import { Controller, Get, Param, Post } from '@nestjs/common';
import { SeriesService } from './series.service';

@Controller('series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) { }

    @Post()
    create() {
        return this.seriesService.getSeriesData();
    }

    @Get()
    findAll() {
        return this.seriesService.findAll();
    }

    @Get('comics')
    findComics() {
        return this.seriesService.findAllComics();
    }

    @Get('creators')
    findCreators() {
        return this.seriesService.findAllCreators();
    }

    @Get('characters')
    findCharacters() {
        return this.seriesService.findAllCharacters();
    }

    @Get('characters/:id')
    findCharacter(@Param('id') id: string) {
        return this.seriesService.findCharacterById(id);
    }

    @Get('comics/count')
    findComicsAmount() {
        return this.seriesService.findComicsAmount();
    }

}
