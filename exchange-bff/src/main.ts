import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorHandlerFilter } from './error-handler.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new ErrorHandlerFilter())
  
  await app.listen(3000);
}
bootstrap();
