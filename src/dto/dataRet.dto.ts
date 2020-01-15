import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface DataRet<T> {
    data: T;
}

@Injectable()
export class DataRetDto<T>
    implements NestInterceptor<T, DataRet<T>> {
    intercept(
        context: ExecutionContext,
        next: CallHandler<T>,
    ): Observable<DataRet<T>> {
        return next.handle().pipe(
            map(data => {
                return {
                    data,
                    code: 0,
                };
            }),
        );
    }
}
