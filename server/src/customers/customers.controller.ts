import { Body, Controller, Get, Post, Res, Param } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersDocument } from './schemas/customers.schema';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':id')
  getCustomer(@Param('id') id, @Res() res) {
    return this.customersService.getCustomerByMiID(id, res);
  }

  @Post('create')
  createCustomer(@Body() body, @Res() res) {
    return this.customersService.createCustomer(body, res);
  }
}
