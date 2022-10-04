import { Body, ClassSerializerInterceptor, Controller, Get, Headers, Logger, Param, Patch, UseFilters, UseInterceptors } from '@nestjs/common';
import { ErrorHandlerFilter } from 'src/error-handler.filter';
import { ConversionAmount } from './model/conversion-amount';
import { Wallet } from './model/wallet';
import { WalletService } from './wallet.service';

@Controller('wallet')
@UseInterceptors(ClassSerializerInterceptor)
@UseFilters(ErrorHandlerFilter)
export class WalletController {
    private readonly logger: Logger = new Logger(WalletController.name)
    constructor(private readonly walletService: WalletService) { }

    @Get(':address')
    getWallet(
        @Param('address') address: string,
        @Headers('user') user: string): Wallet {
        this.logger.log('Getting wallet balance')
        return this.walletService.findByAddress(address, user)
    }

    @Patch(':address')
    async swap(
        @Param('address') address: string,
        @Body() conversionAmount: ConversionAmount,
        @Headers('user') user: string): Promise<Wallet> {
        return await this.walletService.swap(address, conversionAmount, user)
    }
}
