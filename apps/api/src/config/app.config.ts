import { registerAs } from '@nestjs/config';

/**
 * 애플리케이션 코어 설정
 * 'app'이라는 네임스페이스로 환경 변수를 그룹화하여 내보냅니다.
 */
export const appConfig = registerAs('app', () => {
  const isProd = process.env.NODE_ENV === 'production';
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost';
  const frontendPort = process.env.FRONTEND_PORT || (isProd ? '' : '3000'); 
  const corsOrigin = frontendPort ? `${frontendUrl}:${frontendPort}` : frontendUrl;

  return {
    isProd,
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.API_PORT || '3001', 10),
    corsOrigin: corsOrigin,
    apiPrefix: process.env.API_PREFIX || 'api',
  };

});