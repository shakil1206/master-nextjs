import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
export class TaskDto {
    // id: string;
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name: string;
    // completed: boolean;
    // description: string;
    // ownder: string;
    // duration: number;
}