import { Injectable } from '@nestjs/common';
import { CurrencyService } from 'src/currency/currency.service';
import { ConversionAmount } from './model/conversion-amount';
import { Wallet } from './model/wallet';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
    constructor(
        private readonly walletRepository: WalletRepository,
        private readonly currencyService: CurrencyService) { }

    findByAddress(address: string) {
        return this.walletRepository.findByAddress(address)
    }

    async swap(address: string, conversionAmount: ConversionAmount): Promise<Wallet> {
        const wallet = this.walletRepository.findByAddress(address)
        const conversion = await this.currencyService.getConversion(conversionAmount)
        return wallet.swap(conversion)
    }


}
