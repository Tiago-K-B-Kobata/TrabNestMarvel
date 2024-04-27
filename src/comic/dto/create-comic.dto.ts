import { IsNumber, IsString } from "class-validator";

export class CreateComicDto {

    @IsString()
    titulo: string;

    @IsNumber()
    numero: number;

    @IsString()
    description: string;

    @IsString()
    capa: string;

}
