import { Controller, Post } from '@nestjs/common';
import { ProductProducerService } from './product-producer.service';

@Controller('products')
export class ProductProducerController {
  constructor(
    private readonly productProducerService: ProductProducerService,
  ) {}

  @Post()
  async createProduct() {
    // This method can be expanded to handle product creation logic
    const newProduct = {
      id: 1,
      name: 'Sample Product',
      price: 19.99,
    };
    console.log('ProductProducerController: Creating product:', newProduct);
    await this.productProducerService.sendProductCreatedEvent(newProduct);
    return {
      message: 'Product created and event sent to Kafka',
      product: newProduct,
    };
  }
}
