export class ExchangePrice {
    readonly from: string
    readonly to: string
    readonly value: number

    constructor(from: string, to: string, value: number) { 
        this.from = from
        this.to = to
        this.value = value
    }
}

export interface ExchangePrice {
    readonly from: string
    readonly to: string
    readonly value: number
}