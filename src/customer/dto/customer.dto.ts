import { IsDefined, IsEmail } from "class-validator";

export class CustomerDTO {
    first_name: string;
    last_name: string;
    @IsDefined()
    @IsEmail()
    email: string;
    phone: string;
    address: string;
    description: string;
    created_at: Date;
}