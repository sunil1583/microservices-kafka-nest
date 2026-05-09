import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductProducerController } from './product-producer/product-producer.controller';
import { ProductProducerService } from './product-producer/product-producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'product-consumer-group',
          },
        },
      },
    ]),
  ],
  controllers: [ApiGatewayController, ProductProducerController],
  providers: [ApiGatewayService, ProductProducerService],
})
export class ApiGatewayModule {}
