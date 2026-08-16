import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  // Nextra 설정이 필요한 경우 추가
});

const nextConfig: NextConfig = {
  // 기존 Next.js 설정 옵션 추가
};

export default withNextra(nextConfig);
