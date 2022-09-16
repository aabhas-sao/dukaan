import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomersDocument = Customers & Document;

@Schema()
export class Customers {
  @Prop({ required: true, unique: true })
  miID: number;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;
}

export const CustomersSchema = SchemaFactory.createForClass(Customers);
