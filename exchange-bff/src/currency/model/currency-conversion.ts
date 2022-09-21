import { ConversionAmount } from "src/wallet/model/conversion-amount"

export class CurrencyConversion {
    readonly conversionAmount: ConversionAmount
    readonly price: number
    readonly conversion: number

    constructor(
        from: string,
        to: string,
        price: number,
        amount: number) {
        this.conversionAmount = new ConversionAmount(from, to, amount)
        this.price = price
        this.conversion = price * amount
    }
}