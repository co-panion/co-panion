// apps/api/src/config/swagger.config.ts

import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { join } from 'path';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Co-Panion BE API')
    .setDescription('(co-panion) 시스템 백엔드 API 명세서')
    .setVersion('1.0')
    .addBearerAuth() // 보호 라우트용 테스트 토큰 입력
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const specPath = join(process.cwd(), '../../api-spec.json');
  writeFileSync(specPath, JSON.stringify(document, null, 2));

  SwaggerModule.setup('api/docs', app, document);
  // http:localhost:3001/api/docs
};
