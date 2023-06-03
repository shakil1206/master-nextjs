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

    public async getAllCustomer(): Promise<Customer[]> {
        return await this.customerModel.find();
    }

    public async getCustomer(id: string): Promise<Customer> {
        const customer = await this.customerModel.findOne({ _id: id });
        return Promise.resolve(customer);
    }

    public async updateCustomer(customer: CustomerDTO): Promise<Customer> {
        const { email, ...others } = customer;
        const data = await this.customerModel.findOneAndUpdate({ email: email }, { $set: others })
        return Promise.resolve(data);

    }


    public async removeCustomer(id: string): Promise<Customer[]> {
        return await this.customerModel.findByIdAndRemove(id)
    }

}
