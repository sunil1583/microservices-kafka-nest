import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ProductProducerService implements OnModuleInit {

  constructor(@Inject('PRODUCT_SERVICE') private readonly productClient: any) {}
  
  async onModuleInit() {
    await this.productClient.connect();
  }

  async sendProductCreatedEvent(product: any) {
    console.log('Sending product created event to Kafka:', product);
    await this.productClient.emit('product.created', product);
  }
}
