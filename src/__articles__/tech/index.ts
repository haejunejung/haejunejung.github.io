import { ArticlePageProps } from "@/types";

export const techList: ArticlePageProps[] = [
  {
    src: "/images/react.png",
    title: "React 공식 문서 Part(1/2)",
    description: "React Legacy 공식 문서를 학습하며 필요한 개념을 정리했어요.",
    slug: "/tech/react-part-1",
    date: "2024년 12월 06일",
    importMdx: () => import("./react-lagacy.mdx"),
  },
];
