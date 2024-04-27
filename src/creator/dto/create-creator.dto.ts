import { IsArray, IsString } from "class-validator";

export class CreateCreatorDto {

    @IsString()
    nome: string;

    @IsString()
    role: string;

    @IsArray()
    comics: string[];

}
