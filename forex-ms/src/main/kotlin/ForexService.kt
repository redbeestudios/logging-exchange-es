import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ForexService(
    val currencyRepository: CurrencyRepository
) {

    suspend fun getCurrencies(from: String, to: String): ExchangePrice {
        val base = currencyRepository.findCurrency(from)
        val target = currencyRepository.findCurrency(to)
        return ExchangePrice(base, target)
    }
}
