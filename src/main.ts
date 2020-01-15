import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DataRetDto } from './dto/dataRet.dto';
import { HttpExceptionFilter } from './exception/baseHandler.exception';
import { Logger } from '@nestjs/common';
import { APP_CONFIG } from './configurations/app.config';

async function bootstrap() {
    const logger = new Logger();
    logger.log(APP_CONFIG.banner);
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new DataRetDto());
    app.useGlobalFilters(new HttpExceptionFilter());
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    });
    await app.listen(3000);
}

bootstrap();
