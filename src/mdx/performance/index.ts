import { MDXItemProps } from "@/types/MDXItemProps";

export const performanceList: MDXItemProps[] = [
  {
    title: "Lighthouse",
    summary:
      "웹 페이지 성능 측정 도구 Lighthouse를 공부하고 자동화 도구로 만들어봤습니다.",
    path: "/performance/lighthouse.mdx",
    importMdx: () => import("./lighthouse.mdx"),
  },
];
