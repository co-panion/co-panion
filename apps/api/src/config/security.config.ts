//Helmet, CORS

import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

export const setupSecurity = (app:INestApplication, configService:ConfigService) => {
  const corsOrigin = configService.get<string>('app.corsOrigin');

  // 글로벌 보안 헤더(Helmet) 적용
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          //Swagger 허용 정책 설정 // Swagger UI 렌더링을 허용하기 위한 인라인 스크립트/스타일 예외 처리
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'validator.swagger.io'],
        },
      },
      crossOriginEmbedderPolicy: false,
    }),
  );

  // 글로벌 CORS 정책 적용
  app.enableCors({
    origin: corsOrigin,     // 허용할 도메인 (apps/web 주소)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,      // 쿠키 및 인증 헤더 포함 허용
    allowedHeaders: [       // TODO: 어떤 내용들을 담을지 결정해야함
      "Accept",
      "Authorization",
      "Content-Type",
      "Origin",
    ],
    maxAge: 86_400,
  });
};
