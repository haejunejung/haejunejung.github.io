import { MDXPageProps } from "@/types/MDXPageProps";

export const performanceList: MDXPageProps[] = [
  {
    title: "Lighthouse",
    summary:
      "웹 페이지 성능 측정 도구 Lighthouse를 공부하고 자동화 도구로 만들어봤습니다.",
    path: "/performance/lighthouse.mdx",
    importMdx: () => import("./lighthouse.mdx"),
  },
  {
    title: "브라우저 작동 원리",
    summary: "브라우저가 어떻게 동작하는지에 대해 공부했습니다.",
    path: "/performance/browser.mdx",
    importMdx: () => import("./browser.mdx"),
  },
  {
    title: "이미지 최적화",
    summary: "이미지 최적화 방법에 대해 공부했습니다.",
    path: "/performance/image-optimization.mdx",
    importMdx: () => import("./image-optimization.mdx"),
  },
];
