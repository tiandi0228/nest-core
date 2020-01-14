import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): object {
        return {
            code: 0,
            message: '',
            data: 'Hello World!',
        };
    }

    getVersion(): object {
        return {
            code: 0,
            message: '',
            data: {
                version: '0.0.1',
            },
        };
    }
}
