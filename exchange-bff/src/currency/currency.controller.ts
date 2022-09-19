import { Controller, Get, ParseFloatPipe, ParseIntPipe, Query, UseFilters } from '@nestjs/common';
import { ErrorHandlerFilter } from 'src/error-handler.filter';
import { CurrencyService } from './currency.service';
import { CurrencyConversion } from './model/currency-conversion';

@Controller('currency')
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) { }

    @Get()
    @UseFilters(ErrorHandlerFilter)
    async getCurrencyConversion(
        @Query('from') from: string,
        @Query('to') to: string,
        @Query('quantity') quantity: number): Promise<CurrencyConversion> {
        return await this.currencyService.getCurrencyConversion(from, to, quantity)
    }
}
