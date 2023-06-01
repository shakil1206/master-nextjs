import { CustomerDTO } from './../dto/customer.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from '../interface/customer.interface';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    public async createCustomer(customer: CustomerDTO): Promise<Customer> {
        const newCustomer = await this.customerModel.create(customer)
        return Promise.resolve(newCustomer);

    }
    public async updateCustomer(customer: Customer): Promise<Customer> {
        const data = await this.customerModel.findByIdAndUpdate(customer);
        return Promise.resolve(data);
    }

    public async getAllCustomer(): Promise<Customer[]> {
        return await this.customerModel.find({});
    }

    public async getCustomer(id: string): Promise<Customer[]> {
        return await this.customerModel.findById(id);
    }
    public async removeCustomer(id: string): Promise<Customer[]> {
        return await this.customerModel.findByIdAndRemove(id)
    }


}
