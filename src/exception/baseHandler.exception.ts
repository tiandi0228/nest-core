import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';
import { BaseException } from './base.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        if (exception instanceof BaseException) {
            response.status(status).json({
                code: exception.getErrorCode(),
                message: exception.getErrorMessage()
            });
        } else {
            response.status(status).json({
                statusCode: status,
                date: new Date().toLocaleDateString(),
                path: request.url,
                error: exception
            });
        }
    }
}