import javax.ws.rs.core.Response
import javax.ws.rs.core.Response.Status
import javax.ws.rs.ext.ExceptionMapper
import javax.ws.rs.ext.Provider

@Provider
class ErrorHandler : ExceptionMapper<Exception> {

    override fun toResponse(exception: Exception): Response =
        when (exception) {
            is BadRequestException -> badRequest(exception)
            else -> internalError(exception)
        }

    private fun internalError(exception: Exception): Response = Response.status(Status.NOT_FOUND)
        .entity(ErrorResponse(Status.INTERNAL_SERVER_ERROR.statusCode, exception.message ?: "Internal error"))
        .build()

    private fun badRequest(exception: BadRequestException): Response = Response.status(Status.NOT_FOUND)
        .entity(ErrorResponse(Status.NOT_FOUND.statusCode, exception.message ?: "Not found"))
        .build()

    data class ErrorResponse(
        val status: Int,
        val message: String
    )
}
