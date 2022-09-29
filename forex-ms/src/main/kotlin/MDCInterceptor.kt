import io.vertx.core.http.HttpServerRequest
import org.jboss.logging.MDC
import java.util.*
import javax.ws.rs.container.ContainerRequestContext
import javax.ws.rs.container.ContainerRequestFilter
import javax.ws.rs.container.ContainerResponseContext
import javax.ws.rs.container.ContainerResponseFilter
import javax.ws.rs.core.Context
import javax.ws.rs.ext.Provider

@Provider
class MDCInterceptor : ContainerRequestFilter, ContainerResponseFilter {

    @Context
    lateinit var request: HttpServerRequest

    override fun filter(requestContext: ContainerRequestContext?) {
        MDC.put("trace-id", UUID.randomUUID())
    }

    override fun filter(requestContext: ContainerRequestContext?, responseContext: ContainerResponseContext?) {
        MDC.clear()
    }
}
