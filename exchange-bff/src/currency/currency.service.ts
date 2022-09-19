import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { CurrencyConversion } from './model/currency-conversion';
import { ExchangePrice } from './model/exchange-price';

@Injectable()
export class CurrencyService {

    constructor(
        private readonly httpClient: HttpService,
        private readonly logger: Logger) { }

    async getCurrencyConversion(from: string, to: string, quantity: number): Promise<CurrencyConversion> {
        return await lastValueFrom(
            this.httpClient
                .get<ExchangePrice>(`http://localhost:8089/api/v1/exchanges?from=${from}&to=${to}`)
                .pipe(map(response =>
                    new CurrencyConversion(
                        response.data.from,
                        response.data.to,
                        response.data.value,
                        quantity
                    )
                ))
        )
    }
}