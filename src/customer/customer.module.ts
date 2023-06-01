import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';
import { CustomerService } from './services/customer.service';
import { CustomerController } from './controller/customer.controller';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])
    ],
    controllers: [CustomerController],
    providers: [CustomerService],
})
export class CustomerModule { }
