import io.vertx.core.http.HttpServerRequest
import io.vertx.core.http.HttpServerResponse
import org.jboss.logging.Logger
import org.slf4j.MDC
import javax.ws.rs.container.ContainerRequestContext
import javax.ws.rs.container.ContainerRequestFilter
import javax.ws.rs.container.ContainerResponseContext
import javax.ws.rs.container.ContainerResponseFilter
import javax.ws.rs.core.Context
import javax.ws.rs.ext.Provider

@Provider
class HttpInterceptor : ContainerRequestFilter, ContainerResponseFilter {

    @Context
    lateinit var request: HttpServerRequest
    @Context
    lateinit var response: HttpServerResponse

    override fun filter(requestContext: ContainerRequestContext?) {
        val userHeader = request.getHeader(USER_HEADER)
        if (userHeader == null) {
            MDC.put(USER_HEADER, ANONYMOUS_USER)
        } else {
            MDC.put(USER_HEADER, request.getHeader(USER_HEADER))
        }
    }

    override fun filter(requestContext: ContainerRequestContext?, responseContext: ContainerResponseContext?) {
        MDC.clear()
    }

    companion object {
        const val USER_HEADER: String = "user"
        const val ANONYMOUS_USER: String = "anonymous trader"
    }
}
