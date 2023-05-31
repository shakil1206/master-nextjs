import { IsEmail, IsNotEmpty, IsString, IsDefined } from 'class-validator';

export class UserDto {
    @IsEmail()
    @IsString()
    @IsDefined()
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    username: string;
}


export class UserParamsDto {
    @IsEmail()
    @IsString()
    @IsDefined()
    email: string;
}