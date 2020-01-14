import {Injectable} from '@nestjs/common';
import { BaseException } from './exception/base.exception';
import { ErrorStatus } from './enmus/errorStatus.enmus';

@Injectable()
export class AppService {
    getHello(): string {
        // throw new BaseException('错误', ErrorStatus.EMPTY_USER);
        return 'Hello World!';
    }

    getVersion(): object {
        return {
            version: '0.0.1'
        };
    }
}
