import { CurrencyConversion } from "src/currency/model/currency-conversion"

export class Wallet {
    readonly address: string
    balance: Map<string, number>

    constructor(address: string, currencies: Map<string, number>) {
        this.address = address
        this.balance = currencies
    }

    swap(conversion: CurrencyConversion): Wallet {
        const toNewBalance = this.balance.get(conversion.conversionAmount.to) + conversion.conversion
        const fromNewBalance = this.balance.get(conversion.conversionAmount.from) - conversion.conversionAmount.amount
        this.balance.set(conversion.conversionAmount.to, toNewBalance)
        this.balance.set(conversion.conversionAmount.from, fromNewBalance)
        return this
    }
}