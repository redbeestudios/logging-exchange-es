import { Body, ClassSerializerInterceptor, Controller, Get, Param, Patch, Put, UseFilters, UseInterceptors } from '@nestjs/common';
import { CurrencyConversion } from 'src/currency/model/currency-conversion';
import { ErrorHandlerFilter } from 'src/error-handler.filter';
import { ConversionAmount } from './model/conversion-amount';
import { Wallet } from './model/wallet';
import { WalletRepository } from './wallet.repository';
import { WalletService } from './wallet.service';

@Controller('wallet')
@UseInterceptors(ClassSerializerInterceptor)
@UseFilters(ErrorHandlerFilter)
export class WalletController {
    constructor(private readonly walletService: WalletService) { }

    @Get(':address')
    getWallet(@Param('address') address: string): Wallet {
        return this.walletService.findByAddress(address)
    }

    @Patch(':address')
    async swap(
        @Param('address') address: string,
        @Body() conversionAmount: ConversionAmount): Promise<Wallet> {
        return await this.walletService.swap(address, conversionAmount)
    }
}
