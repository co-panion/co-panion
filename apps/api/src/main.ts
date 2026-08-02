// (참고) https://github.com/calcom/cal.diy/blob/main/apps/api/v2/src/main.ts
// Execute bootstrap (Pipes, Interceptors, CORS, etc.) -> bootstrap.ts -> setup
// (참고) https://github.com/calcom/cal.diy/blob/main/apps/api/v2/src/bootstrap.ts
// (참고) nest 실습 예제

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { setupSecurity } from './config/security.config';
import { setupRouting } from './config/routing.config';
import { setupPipeline } from './config/pipeline.config';
import { setupSwagger } from './config/swagger.config';

import { TransformInterceptor, AllExceptionsFilter } from '@co-panion/core-api';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // TODO: Fastify엔진으로도 시도해 볼 예정
  const configService = app.get(ConfigService);

  setupSecurity(app, configService); // TODO: 예외처리(Try-catch)를 어떻게 처리할 것인지?
  setupRouting(app);
  setupPipeline(app);

  const isProd = configService.get<boolean>('app.isProd');
  if (!isProd) {
    setupSwagger(app);
  }

  // 전역 유효성 검사 파이프 (DTO Validator 적용)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // 공통 인프라 전역 적용
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  //멀터 관련
  const uploadDir = join(__dirname, '..', 'uploads');
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }

  // FE 접근 허용: /uploads/<파일명>.jpg
  app.useStaticAssets(uploadDir, {
    prefix: '/uploads/',
  });

  //Graceful Shutdown (안전한 종료)
  app.enableShutdownHooks();

  const port = configService.get<number>('app.port', 3001);
  await app.listen(port);

  console.log(`Server start at ${port}`);
  console.log(`Swagger Docs at : http://localhost:${port}/api/docs`);
}
bootstrap();
