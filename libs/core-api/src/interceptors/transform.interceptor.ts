// (참고) : https://github.com/nestjs/nest/blob/master/sample/01-cats-app/src/common/interceptors/exception.interceptor.ts
// (참고) : https://github.com/novuhq/novu/blob/next/apps/api/src/app/shared/framework/response.interceptor.ts
// (참고) : http://github.com/novuhq/novu/blob/next/apps/webhook/src/shared/framework/response.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { instanceToPlain } from "class-transformer";
import { isArray } from "lodash";

import { StandardResponse } from "@co-panion/shared";

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  StandardResponse<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<StandardResponse<T>> {
    if (context.getType() !== "http") {
      return next.handle();
    }

    // TODO : 점검 필요
    return next.handle().pipe(
      map((res) => {
        const isPaginated =
          res && typeof res === "object" && "data" in res && "meta" in res;
        const rawData = isPaginated ? res.data : res !== undefined ? res : null;
        const transformedData = this.transformResponse(rawData);

        return {
          success: true,
          data: transformedData,
          ...(isPaginated && { meta: res.meta }),
          message: null,
          timestamp: new Date().toISOString(),
        };
      }),
    );
  }

  private transformResponse(response: any): any {
    if (isArray(response)) {
      return response.map((item) => this.transformToPlain(item));
    }
    return this.transformToPlain(response);
  }

  private transformToPlain(plainOrClass: any): any {
    return plainOrClass &&
      typeof plainOrClass === "object" &&
      plainOrClass.constructor !== Object
      ? instanceToPlain(plainOrClass)
      : plainOrClass;
  }
}
