import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */

  // 모노레포 환경에서 Docker 빌드 용량을 획기적으로 줄여주는 필수 설정
  output: "standalone",

  transpilePackages: ["@co-panion/ui"],

  // Docker 컨테이너 내부 네트워크 라우팅 또는 최신 기능 사용 시 설정
  experimental: {
    // 예: 런타임 최적화나 서버 액션 관련 추가 설정이 필요하다면 이곳에 작성
  },

  async headers() {
    return [
      {
        source: "/(.*)", // 애플리케이션의 모든 라우트(경로)에 보안 헤더 적용
        headers: [
          {
            key: "X-Frame-Options", // 클릭재킹 방지 // 다른 사이트의 <iframe/> 안에서 내 사이트가 렌더링되는 것을 막음
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options", // MIME 타입 스니핑 방지 // 브라우저가 선언된 콘텐츠 유형을 우회하여 추측하는 것을 차단
            value: "nosniff",
          },
          {
            key: "Referrer-Policy", // 리퍼러 정책 // 다른 출처로 이동할 때 민감한 URL 파라미터 정보 노출을 제한
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security", // HSTS (Strict-Transport-Security) // 브라우저가 오직 HTTPS로만 사이트와 통신하도록 강제
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control", // DNS 프리패치 제어
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
