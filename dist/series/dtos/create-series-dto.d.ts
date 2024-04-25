export declare class CreateSeriesDto {
    titulo: string;
    startYear: string;
    endYear: string;
    criadores: {
        nome: string;
        cargo: string;
    }[];
    personagens: {
        nome: string;
        img: string;
    }[];
    comics: string[];
}
