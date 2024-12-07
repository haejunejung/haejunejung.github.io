import { ArticlePageProps } from "@/types";

export const techList: ArticlePageProps[] = [
  // {
  //   src: "/images/vite-plugin-image.jpg",
  //   title: "Vite 플러그인 직접 만들어봤어요. Part(3/3)",
  //   description:
  //     "vite-plugin-advanced-image에서 Node.js 내장 모듈인 crypto를 사용해서 캐시 알고리즘을 구현한 경험을 적어봤어요.",
  //   slug: "/tech/vite-plugin-advanced-image-part-3",
  //   date: "2024년 12월 07일",
  //   importMdx: () => import("./vite-plugin-advanced-image-3.mdx"),
  // },
  // {
  //   src: "/images/vite-plugin-image.jpg",
  //   title: "Vite 플러그인 직접 만들어봤어요. Part(1/3)",
  //   description:
  //     "vite-plugin-advanced-image 플러그인을 만들게 된 전반적인 개요, 필요한 개념 그리고 이미지 최적화를 위해 고려했던 라이브러리를 정리해봤어요.",
  //   slug: "/tech/vite-plugin-advanced-image-part-1",
  //   date: "2024년 12월 07일",
  //   importMdx: () => import("./vite-plugin-advanced-image-1.mdx"),
  // },
  {
    src: "/images/vite.jpg",
    title: "Vite 공식 문서 톺아보기",
    description: "Vite 공식 문서를 보며 필요한 개념을 정리했어요.",
    slug: "/tech/vite",
    date: "2024년 12월 08일",
    importMdx: () => import("./vite.mdx"),
  },
  {
    src: "/images/react.png",
    title: "React 공식 문서 Part(1/2)",
    description: "React Legacy 공식 문서를 학습하며 필요한 개념을 정리했어요.",
    slug: "/tech/react-part-1",
    date: "2024년 12월 06일",
    importMdx: () => import("./react-lagacy.mdx"),
  },
];
