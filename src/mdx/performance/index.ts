import { MDXItemProps } from "@/types/MDXItemProps";

export const performanceList: MDXItemProps[] = [
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
];
