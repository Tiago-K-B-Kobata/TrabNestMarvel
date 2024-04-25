import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Max, MaxLength, MinLength } from 'class-validator';


export class CreateSeriesDto {
    @IsString()
    titulo: string;

    @IsNumber()
    startYear: string;

    @IsNumber()
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
