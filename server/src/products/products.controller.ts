import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProductByID() {
    return this.productsService.getProducts();
  }

  @Post('create')
  async createProduct(@Body() createProductDTO: CreateProductDTO, @Res() res) {
    const product = await this.productsService.createProduct(createProductDTO);

    if (!product) {
      return res.status(500).send('error creating new product');
    }

    return res.send(product);
  }
}
