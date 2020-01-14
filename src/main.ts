import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataRetDto } from './dto/dataRet.dto';
import {HttpExceptionFilter} from './exception/baseHandler.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new DataRetDto());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
