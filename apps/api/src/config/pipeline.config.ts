// ValidationPipe, 전역 필터

import { 
  INestApplication, 
  ValidationPipe, 
  BadRequestException,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import cookieParser from 'cookie-parser';

// TODO: 프로젝트에 실제 구현된 예외 필터 경로를 맞추어 임포트해야 합니다.
// import { PrismaExceptionFilter } from '../common/filters/prisma-exception.filter';
// import { HttpExceptionFilter } from '../common/filters/http-exception.filter';

export const setupPipeline = (app : INestApplication) => {
  
  app.use(cookieParser());  // 미들웨어 설정 (요청 데이터를 가장 먼저 가공하도록 최상단 배치)

  // 글로벌 유효성 검사 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, 
      transform: true,
      validationError: { 
        target: true, 
        value: true 
      },
      exceptionFactory: (errors: ValidationError[]): BadRequestException => {
        return new BadRequestException({ errors });
      },
    })
  );

  //글로벌 인터셉터 등록 // 응답 객체를 직렬화하여 @Exclude() 등의 데코레이터를 활성화합니다.
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector))
  );

  // 글로벌 예외 필터 
  // (NestJS는 나중에 등록된 필터를 먼저 실행하므로, 넓은 범위의 예외부터 구체적인 예외 순으로 등록합니다)
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalFilters(new PrismaExceptionFilter());

};