import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { CurrencyConversion } from './currency/model/currency-conversion';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello world";
  }
}
