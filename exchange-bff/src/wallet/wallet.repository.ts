import { Injectable } from "@nestjs/common";
import { ConversionAmount } from "./model/conversion-amount";
import { Wallet } from "./model/wallet";

@Injectable()
export class WalletRepository {
    
    private wallets: Wallet[] = [
        new Wallet('123', new Map<string, number>(
            [['BTC', 12], ['ETH', 20], ['ADA', 716]]
        )),
        new Wallet('456', new Map<string, number>(
            [['USD', 500], ['BEE', 45], ['DOGE', 4000]]
        ))
    ]

    findByAddress(address: string): Wallet {
        return this.wallets
            .find(wallet => wallet.address === address)
    }
}