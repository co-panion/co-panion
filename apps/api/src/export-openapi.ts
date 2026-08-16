import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  // HTTP 리스너 없이 애플리케이션 컨텍스트만 생성 (빠른 실행)
  const app = await NestFactory.create(AppModule, { logger: false });

  // swagger.config.ts 내부의 물리 파일 추출 로직 실행
  setupSwagger(app);

  // 파이프라인이 다음 단계로 넘어갈 수 있도록 애플리케이션 즉시 종료
  await app.close();
  console.log('✅ [Co-Panion API] OpenAPI JSON 추출 성공');
}
bootstrap();
