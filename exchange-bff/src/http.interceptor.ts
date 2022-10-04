import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InternalException } from './exception/internal-exception';

const USER_HEADER = 'user'

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  private readonly logger: Logger = new Logger(HttpInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const userHeader = context.switchToHttp().getRequest().headers[USER_HEADER]
    if (!userHeader) {
      this.logger.warn("Missing user header, enter in anonymous mode")
      context.switchToHttp().getRequest().headers[USER_HEADER] = 'anonymous trader'
    }
    return next.handle()

  }
}
