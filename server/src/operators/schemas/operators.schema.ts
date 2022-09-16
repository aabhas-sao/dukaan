import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OperatorsDocument = Operators & Document;

@Schema()
export class Operators {
  @Prop({ required: true, unique: true })
  miID: number;

  @Prop({ required: true, unique: true })
  storeID: number;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;
}

export const OperatorsSchema = SchemaFactory.createForClass(Operators);
