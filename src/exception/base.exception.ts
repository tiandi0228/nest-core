import {HttpException} from '@nestjs/common';
import { ErrorCode, ErrorMessage } from '../enmus/errorStatus.enmus';

export class BaseException extends HttpException {
    code: ErrorCode;
    message: ErrorMessage;

    constructor(errorCode: ErrorCode, errorMessage: ErrorMessage) {
        super(errorMessage, errorCode);
        this.code = errorCode;
        this.message = errorMessage;
    }

    getErrorCode(): ErrorCode {
        return this.code;
    }

    getErrorMessage(): ErrorMessage {
        return this.message;
    }
}
