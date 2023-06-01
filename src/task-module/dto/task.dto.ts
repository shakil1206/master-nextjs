import { Transform } from 'class-transformer';
import { IsBoolean, IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';
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


export class TaskParamDto {
    @IsUUID()
    @IsDefined()
    id: string;
}

export class QueryParamDto {
    @IsDefined()
    @IsBoolean()

    @Transform(item => {
        if (item.value === 'true') {
            return true;
        }
        if (item.value === 'false') {
            return false;
        }
        return item.value;
    })
    filter: boolean

    @IsDefined()
    @IsString()
    name: string

}
//api?filter=true&filterby=username