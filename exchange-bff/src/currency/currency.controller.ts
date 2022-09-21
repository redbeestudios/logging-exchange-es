import { Controller, Get, ParseFloatPipe, ParseIntPipe, Post, Query, UseFilters } from '@nestjs/common';
import { ErrorHandlerFilter } from 'src/error-handler.filter';
import { ConversionAmount } from 'src/wallet/model/conversion-amount';
import { CurrencyService } from './currency.service';
import { CurrencyConversion } from './model/currency-conversion';

@Controller('currency')
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) { }

    @Get()
    async getCurrencyConversion(
        @Query('from') from: string,
        @Query('to') to: string,
        @Query('amount') amount: number): Promise<CurrencyConversion> {
        return await this.currencyService.getConversion(new ConversionAmount(from, to, amount))
    }
}
