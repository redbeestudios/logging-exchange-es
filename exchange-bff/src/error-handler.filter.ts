import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import * as moment from 'moment';

@Catch()
export class ErrorHandlerFilter<T> implements ExceptionFilter {
  private readonly logger: Logger = new Logger(ErrorHandlerFilter.name)

  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>(); 
    const httpStatus = 500

    const responseBody = {
      status: httpStatus,
      timestamp: moment().format(),
      path: request.url,
    }

    response
      .status(httpStatus)
      .json(responseBody)
  }
}
