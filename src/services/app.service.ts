import { Injectable } from '@nestjs/common';
import { BaseException } from '../exception/base.exception';
import { ErrorCode, ErrorMessage } from '../enmus/errorStatus.enmus';

@Injectable()
export class AppService {
    getHello(): string {
        throw new BaseException(ErrorCode.EMPTY_USER, ErrorMessage.EMPTY_USER);
        // return 'Hello World!';
    }

    getVersion(): object {
        return {
            version: '0.0.1'
        };
    }
}
