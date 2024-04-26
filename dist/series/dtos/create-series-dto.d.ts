import { Personagem } from 'src/personagem/schema/personagem.schema';
export declare class CreateSeriesDto {
    titulo: string;
    startYear: string;
    endYear: string;
    criadores: {
        nome: string;
        cargo: string;
    }[];
    personagens: Personagem[];
    comics: string[];
}
