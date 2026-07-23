// API 버저닝(Versioning), 전역 인터셉터(Interceptor) // 하위 호환성 유지와 응답 데이터 규격화

import { INestApplication, VersioningType } from '@nestjs/common';
import { DEFAULT_API_VERSION } from '../common/constants/api.constant';

export const setupRouting = (app: INestApplication) => {
  // 글로벌 접두사 설정
  app.setGlobalPrefix('api');

  // URI 버저닝 활성화
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: DEFAULT_API_VERSION, // 기본 버전을 v1으로 설정
  });
};