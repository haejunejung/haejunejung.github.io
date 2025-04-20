import type { ArticlePageProps } from "@/types";

export const techList: ArticlePageProps[] = [
  {
    src: "/images/eslint.png",
    title: "ESLint의 Flat Config로 가는 길: 소개",
    description: "ESLint의 새로운 설정 방식 Flat Config에 대해서 소개합니다",
    slug: "/tech/eslint-flat-config-introudction",
    date: "2024년 3월 17일",
    importMdx: () => import("./eslint-flat-config-introduction.mdx")
  },
  {
    src: "/images/eslint.png",
    title: "ESLint의 Flat Config로 가는 길: 배경",
    description: "ESLint 설정 시스템의 발전 과정과 최신 설정 방식인 Flat Config의 탄생 배경을 다룹니다",
    slug: "/tech/eslint-flat-config-background",
    date: "2024년 3월 15일",
    importMdx: () => import("./eslint-flat-config-background.mdx")
  },
  {
    src: "/images/pub-sub-banner.png",
    title: "발생/구독 디자인 패턴",
    description: "발생/구독 디자인 패턴에 대해 학습했어요 (Zustand를 곁들인...)",
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
