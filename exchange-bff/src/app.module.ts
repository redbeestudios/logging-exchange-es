import { HttpModule } from '@nestjs/axios';
import { Logger, Module } from '@nestjs/common';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyService } from './currency/currency.service';
import { WalletController } from './wallet/wallet.controller';
import { WalletRepository } from './wallet/wallet.repository';
import { WalletService } from './wallet/wallet.service';

@Module({
  imports: [HttpModule],
  controllers: [CurrencyController, WalletController],
  providers: [
    CurrencyService,
    WalletService,
    WalletRepository,
    Logger
  ],
})
export class AppModule { }
