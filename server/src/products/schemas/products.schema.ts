import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 1 })
  quantity: number;

  // Todo: add stock left

  // Todo: add capability to add multiple images
  @Prop({ required: true })
  images: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
