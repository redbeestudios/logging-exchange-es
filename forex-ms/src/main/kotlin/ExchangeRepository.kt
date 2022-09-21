import java.math.BigDecimal
import java.math.MathContext
import java.math.RoundingMode
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ExchangeRepository {

    suspend fun getCurrencies(from: String, to: String): ExchangePrice {
        val base = currencies
            .find { it.symbol == from }
            ?: throw NotFoundException("Currency not found $from")

        val target = currencies
            .find { it.symbol == to }
            ?: throw NotFoundException("Currency not found $to")

        return ExchangePrice(base.symbol, target.symbol,
            base.value.divide(target.value, 2, RoundingMode.HALF_UP))
    }

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
