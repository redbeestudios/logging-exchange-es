import java.math.BigDecimal

data class ExchangePrice(
    val from: String,
    val to: String,
    val value: BigDecimal
)
