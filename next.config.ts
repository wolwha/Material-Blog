import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // 여기에 에러 뜬 도메인을 넣습니다.
        port: '',
        pathname: '/**',
      },
      // 만약 다른 Google 도메인도 에러가 난다면 추가해야 할 수도 있습니다.
      // {
      //   protocol: 'https',
      //   hostname: '*.googleusercontent.com', // 참고: 와일드카드는 Next.js 버전에 따라 지원 여부가 다를 수 있습니다.
      // }
      {
        protocol: 'https',
        hostname: 'iziqhetiqqnkxiyymwsd.supabase.co', // 에러 났던 Supabase 호스트명
        port: '',
        pathname: '/storage/v1/object/**', // 스토리지 경로 패턴
      },
    ],
  },
};

export default nextConfig;
