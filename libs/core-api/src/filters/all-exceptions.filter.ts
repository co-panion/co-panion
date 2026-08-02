// (참고) : https://github.com/nestjs/nest/blob/master/sample/01-cats-app/src/common/filters/http-exception.filter.ts
// (참고) : https://docs.nestjs.com/techniques/validation

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorCode = "INTERNAL_SERVER_ERROR";
    let message = "서버 내부 오류가 발생했습니다.";

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      // NestJS 내장 Validation 에러 등의 객체 응답 처리
      if (typeof exceptionResponse === "object" && exceptionResponse !== null) {
        message = (exceptionResponse as any).message || exception.message;
        errorCode = (exceptionResponse as any).error || HttpStatus[status];
      } else {
        message = exception.message;
        errorCode = HttpStatus[status];
      }
    } else if (exception instanceof Error) {
      // HttpException이 아닌 일반 런타임 에러 (DB 에러 등)
      message = exception.message;
    }

    // class-validator가 반환하는 에러가 배열일 경우 첫 번째 요소만 추출
    const formattedMessage = Array.isArray(message) ? message[0] : message;

    response.status(status).json({
      success: false,
      data: null,
      error: {
        code: errorCode.toString().toUpperCase().replace(/\s+/g, "_"),
        message: formattedMessage,
      },
      timestamp: new Date().toISOString(),
    });
  }
}
