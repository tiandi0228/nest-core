import {HttpException} from '@nestjs/common';
import { ErrorStatus } from '../enmus/errorStatus.enmus';

export class BaseException extends HttpException {
    code: ErrorStatus;
    message: string;

    constructor(errorMessage: string, errorCode: ErrorStatus) {
        super(errorMessage, errorCode);
        this.code = errorCode;
        this.message = errorMessage;
    }

    getErrorCode(): ErrorStatus {
        return this.code;
    }

    getErrorMessage(): string {
        return this.message;
    }
}