import { MDXPageProps } from "@/types/MDXPageProps";

export const performanceList: MDXPageProps[] = [
  {
    title: "이미지 최적화",
    description:
      "이미지 최적화 방법은 무엇이 있을까에 대해 찾아보고 공부했습니다.",
    path: "/performance/image-optimization.mdx",
    date: "2024년 11월 18일",
    importMdx: () => import("./image-optimization.mdx"),
  },
  {
    title: "브라우저 동작 원리",
    description: "브라우저는 어떤 원리로 동작하는지 공부했습니다.",
    path: "/performance/browser.mdx",
    date: "2024년 11월 17일",
    importMdx: () => import("./browser.mdx"),
  },
  {
    title: "Lighthouse",
    description:
      "웹 성능 측정 도구 Lighthouse에 대해 공부하고, Lighthouse CI와 Github Actions를 활용해 자동화된 성능 측정 도구를 만들어봤습니다.",
    path: "/performance/lighthouse.mdx",
    date: "2024년 11월 10일",
    importMdx: () => import("./lighthouse.mdx"),
  },
].map((item) => ({ ...item, type: "Performance" }));
