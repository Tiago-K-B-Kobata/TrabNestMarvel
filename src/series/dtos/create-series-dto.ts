import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Max, MaxLength, MinLength } from 'class-validator';
import { Personagem } from 'src/personagem/schema/personagem.schema';


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


    personagens: Personagem[];

    comics: string[];
}
