import { Test, TestingModule } from '@nestjs/testing';
import { ProductProducerService } from './product-producer.service';

describe('ProductProducerService', () => {
  let service: ProductProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductProducerService],
    }).compile();

    service = module.get<ProductProducerService>(ProductProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
