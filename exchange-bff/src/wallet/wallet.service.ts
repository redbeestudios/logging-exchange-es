import { ExecutionContext, Injectable } from '@nestjs/common';
import { CurrencyService } from 'src/currency/currency.service';
import { ConversionAmount } from './model/conversion-amount';
import { Wallet } from './model/wallet';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
    constructor(
        private readonly walletRepository: WalletRepository,
        private readonly currencyService: CurrencyService) { }

    findByAddress(address: string, user: string) {
        return this.walletRepository.findByAddress(address, user)
    }

    async swap(address: string, conversionAmount: ConversionAmount, user: string): Promise<Wallet> {
        const wallet = this.walletRepository.findByAddress(address, user)
        const conversion = await this.currencyService.getConversion(conversionAmount)
        return wallet.swap(conversion)
    }
}
