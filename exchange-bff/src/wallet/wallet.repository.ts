import { Injectable, Logger } from "@nestjs/common";
import { NotFoundException } from "src/exception/not-found-exception";
import { ConversionAmount } from "./model/conversion-amount";
import { Wallet } from "./model/wallet";

@Injectable()
export class WalletRepository {
    private readonly logger: Logger = new Logger(WalletRepository.name)

    private wallets: Wallet[] = [
        new Wallet('123', new Map<string, number>(
            [['BTC', 12], ['ETH', 20], ['ADA', 716]]
        )),
        new Wallet('456', new Map<string, number>(
            [['USD', 500], ['BEE', 45], ['DOGE', 4000]]
        ))
    ]

    findByAddress(address: string, user: string): Wallet {
        this.logger.log(`Querying wallet by address: ${address} for the user: ${user}`)
        const wallet = this.wallets.find(wallet => wallet.address === address)
        if(wallet) {
            this.logger.log(`Wallet was found: ${JSON.stringify(wallet)}`)
            return wallet
        } else {
            this.logger.error(`Wallet with address ${address} not found`)
            throw new NotFoundException(`Wallet with address ${address} not found`)
        }
    }
}