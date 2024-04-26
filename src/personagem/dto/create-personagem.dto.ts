import { IsNotEmpty, IsString } from "class-validator";

export class CreatePersonagemDto {


    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    img: string;

    @IsString()
    description: string;

}
