import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrdersDocument } from './schemas/orders.schema';
import { CreateOrderDTO } from './dto/create-order.dto';
import { AddProductDTO } from './dto/add-product.dto';
import { ProductsDocument } from 'src/products/schemas/products.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('orders') private ordersModel: Model<OrdersDocument>,
    @InjectModel('products') private productsModel: Model<OrdersDocument>,
  ) {}

  async getAllOrders() {
    const orders = await this.ordersModel.find();
    return orders;
  }

  async addProduct(addProductDTO: AddProductDTO) {
    const { id, product } = addProductDTO;

    const order: OrdersDocument = await this.ordersModel.findById(id);

    if (!order) {
      return null;
    }

    const existingProduct: string = order.products.find((item) => {
      console.log('item', item.toString(), product);
      return item.toString() === product;
    });

    if (existingProduct) {
      await this.productsModel.findByIdAndUpdate(product, {
        $inc: { quantity: 1 },
      });
      return order.populate({ path: 'products' });
    }

    await this.ordersModel.findByIdAndUpdate(id, {
      $push: { products: new Types.ObjectId(product) },
    });

    return await this.ordersModel.findById(id).populate({ path: 'products' });
  }

  async createOrder(createOrderDTO: CreateOrderDTO) {
    let customer: Types.ObjectId | string = createOrderDTO.customer;
    let operator: Types.ObjectId | string = createOrderDTO.operator;

    customer = new Types.ObjectId(customer);
    operator = new Types.ObjectId(operator);

    const order = await this.ordersModel.create({
      customer,
      operator,
    });

    await order.populate({ path: 'products' });

    return order;
  }
}
