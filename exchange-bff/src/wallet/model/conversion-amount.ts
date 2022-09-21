export class ConversionAmount {
    readonly from: string
    readonly to: string
    readonly amount: number

    constructor(from: string, to: string, amount: number) {
        this.from = from
        this.to = to
        this.amount = amount
    }
}