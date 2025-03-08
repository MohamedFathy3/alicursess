import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  reactStrictMode: true,  // تحسين الكود وتحذيرات في حالة وجود أخطاء
  images: {
    domains: ['example.com'],  // إعداد أسماء النطاقات المسموح لها باستخدام الصور
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}
