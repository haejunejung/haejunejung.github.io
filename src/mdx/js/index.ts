import { MDXPageProps } from "@/types/MDXPageProps";
import Scope from "./assets/scope.png";

export const jsList: MDXPageProps[] = [
  {
    thumnailSrc: Scope,
    title: "Scope",
    description:
      "스코프란 무엇이고, 자바스크립트는 어떤 스코프를 가지고 있는지 공부했습니다.",
    path: "/js/scope.mdx",
    date: "2024년 11월 20일",
    importMdx: () => import("./scope.mdx"),
  },
];
