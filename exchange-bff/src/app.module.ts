import { HttpModule } from '@nestjs/axios';
import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyService } from './currency/currency.service';
import { WalletController } from './wallet/wallet.controller';
import { WalletRepository } from './wallet/wallet.repository';
import { WalletService } from './wallet/wallet.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CurrencyController, WalletController],
  providers: [
    AppService,
    CurrencyService,
    WalletRepository,
    WalletService,
    Logger
  ],
})
export class AppModule { }
