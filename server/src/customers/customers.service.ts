import { Body, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomersDocument } from './schemas/customers.schema';
import { customAlphabet } from 'nanoid';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('customers') private customersModel: Model<CustomersDocument>,
  ) {}

  async getCustomerByMiID(id: number, @Res() res) {
    const customer = await this.customersModel.findOne({ miID: id });

    if (!customer) {
      return res
        .status(400)
        .send({ message: 'no customer found with provided Mi ID' });
    }

    return res.send(customer);
  }

  async createCustomer(@Body() body, @Res() res) {
    const { firstName, lastName, email } = body;

    const nanoid = customAlphabet('1234567890', 16);
    // Todo: check miID for collision
    const miID = nanoid();

    const existingCustomer = await this.customersModel.findOne({
      email: email,
    });

    if (existingCustomer) {
      return res.send({ message: 'A customer with this email already exists' });
    }

    const customer: CustomersDocument = await this.customersModel.create({
      firstName,
      lastName,
      email,
      miID,
    });

    return res.send(customer);
  }
}
