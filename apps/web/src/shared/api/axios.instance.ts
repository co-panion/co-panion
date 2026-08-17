// apps/web/src/shared/api/axios.instance.ts
import axios, { AxiosResponse } from "axios";
//import { toast } from '@/shared/ui/Toast';
import type { StandardResponse } from "@co-panion/shared"; // libs/shared 참조
// import { useAuthStore } from '@/features/auth/store'; (FSD 역방향 참조 제거)

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "", // Next.js 클라이언트 표준 환경변수 접근법
  timeout: 10000,
  withCredentials: true,
});

// 1. Request Interceptor: JWT 토큰 자동 주입 (스토리지 직접 조회)
api.interceptors.request.use((config) => {
  // Next.js SSR(서버 사이드) 실행 환경 방어 코드
  if (typeof window !== "undefined") {
    const authStorage = localStorage.getItem("auth-storage"); // Zustand의 persist 미들웨어를 사용한다면 저장된 키값(예: 'auth-storage')을 입력

    if (authStorage) {
      try {
        const { state } = JSON.parse(authStorage);
        // 저장 구조에 맞게 accessToken 추출
        if (state?.accessToken) {
          config.headers.Authorization = `Bearer ${state.accessToken}`;
        }
      } catch (error) {
        console.error("Token parsing error:", error);
      }
    }
  }
  return config;
});

// 2. Response Interceptor: 공통 응답 규격 해체 및 에러 핸들링
api.interceptors.response.use(
  (response) => {
    const res = response.data as StandardResponse; // <unknown> 생략 가능

    if (res.message && response.config.method !== "get") {
      //toast.success(res.message);
    }
    return res.data as unknown as AxiosResponse;
  },
  (error) => {
    const errorResponse = error.response?.data as StandardResponse;
    const errorMessage =
      errorResponse?.message || "서버와의 통신에 실패했습니다.";

    switch (error.response?.status) {
      case 401:
        //toast.error('인증이 만료되었습니다. 다시 로그인해주세요.');
        // 스토어(features) 의존성을 끊었으므로, 브라우저 API를 이용해 강제 로그아웃 처리
        if (typeof window !== "undefined") {
          localStorage.removeItem("auth-storage"); // 토큰 파기
          window.location.href = "/login"; // 하드 리다이렉트
        }
        break;
      case 403:
        //toast.error('해당 기능에 대한 접근 권한이 없습니다.');
        break;
      case 400:
      case 404:
      case 409:
        //toast.error(errorMessage);
        break;
      case 500:
        //toast.error('시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        // Sentry 프론트엔드 로깅 포인트
        break;
      default:
      //toast.error('네트워크 오류가 발생했습니다.');
    }

    return Promise.reject(errorResponse);
  },
);
