import java.math.BigDecimal
import java.math.RoundingMode

data class ExchangePrice(
    val from: String,
    val to: String,
    val value: BigDecimal
) {
    constructor(from: Currency, to: Currency) : this(
        from.symbol,
        to.symbol,
        from.value.divide(to.value, 2, RoundingMode.HALF_UP)
    )
}
