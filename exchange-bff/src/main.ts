import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorHandlerFilter } from './error-handler.filter';
import { HttpInterceptor } from './http.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log'],
  })

  app.useGlobalInterceptors(new HttpInterceptor())
  app.useGlobalFilters(new ErrorHandlerFilter())

  await app.listen(3000);
}
bootstrap();
