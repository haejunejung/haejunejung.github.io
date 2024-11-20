import { MDXItemProps } from "@/types/MDXItemProps";

export const jsList: MDXItemProps[] = [
  {
    title: "Scope",
    summary: "자바스크립트의 스코프에 대해 공부했습니다.",
    path: "/js/scope.mdx",
    importMdx: () => import("./scope.mdx"),
  },
];
