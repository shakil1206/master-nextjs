import { Document } from "mongoose";

export interface Customer extends Document {
    first_name?: string;
    last_name?: string;
    email: string;
    phone?: string;
    address?: string;
    description?: string;
    created_at?: Date;
}