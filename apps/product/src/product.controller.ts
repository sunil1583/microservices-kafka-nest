import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }

  @MessagePattern('product.created')
  handleProductCreatedEvent(payload: any) {
    console.log('Received product created event:', payload);
    // Here you can add logic to handle the product created event, such as saving it to a database
  }
}
