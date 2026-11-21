import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Pages 프로젝트 사이트는 /저장소이름/ 아래에 열려서 경로 접두사가 필요함 (로컬 빌드는 빈 값)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
