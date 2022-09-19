export class CurrencyConversion {
    readonly from: string
    readonly to: string
    readonly price: number
    readonly quantity: number
    readonly conversion: number

    constructor(
        from: string,
        to: string,
        price: number,
        quantity: number) {
        this.from = from
        this.to = to
        this.price = price
        this.quantity = quantity
        this.conversion = price * quantity
    }
}