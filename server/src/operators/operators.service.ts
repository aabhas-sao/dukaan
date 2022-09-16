import { Model } from 'mongoose';
import { Body, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OperatorsDocument } from './schemas/operators.schema';

@Injectable()
export class OperatorsService {
  constructor(
    @InjectModel('operators') private operatorsModel: Model<OperatorsDocument>,
  ) {}

  async signIn(@Body() body, @Res() res) {
    const { miID, password } = body;

    const query: OperatorsDocument[] = await this.operatorsModel.find({
      miID,
    });

    const user = query[0];

    if (user.password == password) {
      return res.send(user);
    }

    return res.send('invalid username or password');
  }

  async signUp(@Body() body, @Res() res) {
    const { email, password, storeID, miID, firstName, lastName } = body;

    const existingUser: OperatorsDocument = await this.operatorsModel.findOne({
      miID,
    });

    if (existingUser) {
      return res.status(400).send({ message: 'user already exists' });
    }

    const user = await this.operatorsModel.create({
      email,
      password,
      storeID,
      miID,
      firstName,
      lastName,
    });

    return res.send(user);
  }
}
