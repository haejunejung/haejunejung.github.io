import { ArticlePageProps } from "@/types";

export const techList: ArticlePageProps[] = [
  {
    src: "/images/pub-sub-design-pattern",
    title: "발생/구독 디자인 패턴",
    description: "발생/구독 디자인 패턴에 대해 학습했어요 (zustand 소스 코드 분석을 곁들인...)",
    slug: "/tech/pub-sub-design-pattern",
    date: "2024년 2월 16일",
    importMdx: () => import("./pub-sub-design-pattern.mdx")
  },
  {
    src: "/images/fds-figma-plugin.png",
    title: "띵동! 아이콘이 도착했어요 (1)",
    description: "아이콘을 쉽게 관리할 수 있는 피그마 플러그인을 개발했어요",
    slug: "/tech/fds-figma-plugin-1",
    date: "2024년 2월 2일",
    importMdx: () => import("./fds-figma-plugin-1.mdx")
  }
];
