import org.jboss.logging.Logger
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.QueryParam
import javax.ws.rs.core.MediaType

@Path("/api/v1")
class ForexController(
    val currencyService: ForexService,
    val logger: Logger
) {

    @GET
    @Path("/exchanges")
    @Produces(MediaType.APPLICATION_JSON)
    suspend fun getConversion(
        @QueryParam("from") from: String,
        @QueryParam("to") to: String
    ) =
        currencyService
            .getCurrencies(from, to)
}
