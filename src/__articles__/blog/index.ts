import { ArticlePageProps } from "@/types";

export const blogList: ArticlePageProps[] = [
  {
    src: "/images/banner.png",
    title: "Re: 제로부터 시작하는 개발 블로그",
    description:
      "왜 블로그를 직접 개발했는지와 앞으로의 블로그 방향성에 대해서 작성했어요.",
    slug: "/blog/why-tech-blog",
    date: "2024년 12월 02일",
    importMdx: () => import("./why-tech-blog.mdx"),
  },
];
