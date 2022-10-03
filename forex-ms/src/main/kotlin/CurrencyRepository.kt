import java.math.BigDecimal
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class CurrencyRepository {

    fun findCurrency(symbol: String): Currency = currencies.find { it.symbol == symbol }
        ?: throw NotFoundException("Currency not found $symbol")

    companion object {
        // USD based
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
