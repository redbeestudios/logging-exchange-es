import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { ConversionAmount } from 'src/wallet/model/conversion-amount';
import { CurrencyConversion } from './model/currency-conversion';
import { ExchangePrice } from './model/exchange-price';

@Injectable()
export class CurrencyService {

    constructor(
        private readonly httpClient: HttpService) { }

    async getConversion(conversionAmount: ConversionAmount): Promise<CurrencyConversion> {
        return await lastValueFrom(
            this.httpClient
                .get<ExchangePrice>(`http://localhost:8089/api/v1/exchanges?from=${conversionAmount.from}&to=${conversionAmount.to}`)
                .pipe(map(response =>
                    new CurrencyConversion(
                        response.data.from,
                        response.data.to,
                        response.data.value,
                        conversionAmount.amount
                    )
                ))
        )
    }
}