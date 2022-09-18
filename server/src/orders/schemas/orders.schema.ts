import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customers } from 'src/customers/schemas/customers.schema';
import { Operators } from 'src/operators/schemas/operators.schema';

export type OrdersDocument = Orders & Document;

@Schema()
export class Orders {
  @Prop({ type: [Types.ObjectId], ref: 'products' })
  products: string[];

  @Prop({ type: Types.ObjectId, ref: 'operators', required: true })
  operator: Operators;

  @Prop({ type: Types.ObjectId, ref: 'customers', require: true })
  customer: Customers;

  @Prop({ required: true })
  price: number;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
