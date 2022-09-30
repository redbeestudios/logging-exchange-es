import org.jboss.logging.Logger
import java.math.BigDecimal
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ExchangeRepository(
    val logger: Logger
) {

    suspend fun getCurrencies(from: String, to: String): ExchangePrice {
        this.logger.info("Looking base currency")
        val base = findCurrency(from)
            .also { this.logger.info("Base currency was found: $it") }
        val target = findCurrency(to)
            .also { this.logger.info("Target currency was found: $it") }
        return ExchangePrice(base, target)
            .also { this.logger.info("Exchange price $it") }
    }

    fun findCurrency(symbol: String) = currencies.find { it.symbol == symbol }
        ?: throw NotFoundException("Currency not found $symbol")

    companion object {

        val currencies = setOf(
            Currency("BTC", BigDecimal(19845.85)),
            Currency("ETH", BigDecimal(1544.46)),
            Currency("ADA", BigDecimal(0.45)),
            Currency("BEE", BigDecimal(150)),
            Currency("USD", BigDecimal(1)),
            Currency("LTC", BigDecimal(53.29))
        )
    }
}
