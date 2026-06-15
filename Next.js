import type { NextConfig } from "next";

/**
 * 굿즈 헌터(Goods Hunter) 프로젝트 전용 Next.js 실행 설정
 * 유튜브 썸네일이나 가이드 영상 데이터를 안전하게 불러올 수 있도록 보안 도메인을 허용합니다.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com", // 유튜브 동영상 썸네일 이미지를 불러올 때 필요해요
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co", // Supabase 스토리지에 굿즈 포스터 올릴 때를 대비해 허용해요
        pathname: "/**",
      }
    ]
  },
  // 개발 중에 문법 경고(ESLint) 때문에 빌드가 멈추는 걸 방지하고 싶다면 아래 주석을 풀어주세요
  // eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;