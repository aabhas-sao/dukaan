import { Model } from 'mongoose';
import { Body, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductsDocument } from './schemas/products.schema';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private productsModel: Model<ProductsDocument>,
  ) {}

  getProducts() {
    return this.productsModel.find();
  }

  async createProduct(createProductDTO: CreateProductDTO) {
    const { name, price, images } = createProductDTO;

    const product = await this.productsModel.create({
      name,
      price,
      images,
    });

    return product;
  }
}
