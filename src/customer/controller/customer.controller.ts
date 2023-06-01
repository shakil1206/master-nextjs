import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Response } from 'express';
import { CustomerDTO } from '../dto/customer.dto';

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async createCustomer(@Res() res: Response, @Body() customerParam: CustomerDTO) {
        const data = await this.customerService.createCustomer(customerParam);
        res.status(HttpStatus.OK).json(data);

    }

    @Get()
    async getAllCustomer(@Res() res: Response) {
        const data = await this.customerService.getAllCustomer();
        res.status(HttpStatus.OK).json(data);
    }

    @Get(':/customerId')
    async getCustomerById(@Res() res: Response, @Param('id') id: string) {
        const data = await this.customerService.getCustomer(id);
        res.status(HttpStatus.OK).json(data);
    }

    @Delete(':/customerId')
    async deleteCustomerById(@Res() res: Response, @Param('id') id: string) {
        const data = await this.customerService.getCustomer(id);
        res.status(HttpStatus.OK).json(data);
    }

    @Put()
    async updateCustomerById(@Res() res: Response, @Param('id') id: string) {
        const data = await this.customerService.getCustomer(id);
        res.status(HttpStatus.OK).json(data);
    }

}
