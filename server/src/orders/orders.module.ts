import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsSchema } from 'src/products/schemas/products.schema';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersSchema } from './schemas/orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'orders', schema: OrdersSchema }]),
    MongooseModule.forFeature([{ name: 'products', schema: ProductsSchema }]),
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
