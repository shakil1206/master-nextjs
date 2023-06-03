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
    @UsePipes(new ValidationPipe())
    async getAllCustomer(@Res() res: Response) {
        const data = await this.customerService.getAllCustomer();
        res.status(HttpStatus.OK).json(data);
    }

    @Get('/:customerId')
    @UsePipes(new ValidationPipe())
    async getCustomerById(@Res() res: Response, @Param('customerId') id: string) {
        const data = await this.customerService.getCustomer(id);
        res.status(HttpStatus.OK).json(data);
    }

    @Delete('/:customerId')
    @UsePipes(new ValidationPipe())
    async deleteCustomerById(@Res() res: Response, @Param('customerId') id: string) {
        const data = await this.customerService.removeCustomer(id);
        res.status(HttpStatus.OK).json(data);
    }

    @Put()
    @UsePipes(new ValidationPipe())
    async updateCustomerById(@Res() res: Response, @Body() customerParam: CustomerDTO) {
        const data = await this.customerService.updateCustomer(customerParam);
        res.status(HttpStatus.OK).json(data);
    }

}
