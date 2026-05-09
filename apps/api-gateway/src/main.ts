import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
    console.log('API Gateway is starting...');

  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
  console.log('API Gateway is listening on port 3000...');
}
bootstrap();
