import org.jboss.logging.Logger
import java.math.BigDecimal
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ExchangeRepository(
    val logger: Logger
) {

    suspend fun getCurrencies(from: String, to: String): ExchangePrice {
        return currencies_conversion
            .find { it.from == from && it.to == to }
            ?: throw BadRequestException("Currency pair not found from: $from to: $to")
    }

    companion object {
        val currencies_conversion = setOf(
            ExchangePrice("BTC", "USD", BigDecimal(20000)),
            ExchangePrice("ETC", "USD", BigDecimal(1800)),
            ExchangePrice("ADA", "USD", BigDecimal(0.45)),
            ExchangePrice("BTC", "ADA", BigDecimal(40.429)),
            ExchangePrice("ETC", "ADA", BigDecimal(3.431)),
        )
    }
}
