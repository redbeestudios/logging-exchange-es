import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let provider: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService],
    }).compile();

    provider = module.get<CurrencyService>(CurrencyService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
