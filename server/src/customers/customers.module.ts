import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomersSchema } from './schemas/customers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'customers', schema: CustomersSchema }]),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
