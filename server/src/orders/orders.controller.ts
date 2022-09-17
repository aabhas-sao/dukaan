import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddProductDTO } from './dto/add-product.dto';
import { CreateOrderDTO } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Post('create')
  async createOrder(@Body() createOrderDTO: CreateOrderDTO) {
    return this.ordersService.createOrder(createOrderDTO);
  }

  @Post('product')
  async addProduct(@Body() addProductDTO: AddProductDTO) {
    return this.ordersService.addProduct(addProductDTO);
  }
}
