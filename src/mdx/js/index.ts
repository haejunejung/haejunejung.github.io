import { MDXPageProps } from "@/types/MDXPageProps";

export const jsList: MDXPageProps[] = [
  {
    title: "Scope",
    description:
      "스코프란 무엇이고, 자바스크립트는 어떤 스코프를 가지고 있는지 공부했습니다.",
    path: "/js/scope.mdx",
    date: "2024년 11월 20일",
    importMdx: () => import("./scope.mdx"),
  },
  {
    title: "Web Storage",
    description:
      "브라우저에 데이터를 저장하는 방법, LocalStorage, SessionStorage, IndxedDB에 대해 공부했습니다.",
    path: "/js/web-storage.mdx",
    date: "2024년 11월 1일",
    importMdx: () => import("./web-storage.mdx"),
  },
  {
    title: "Service Worker",
    description:
      "웹 애플리케이션의 백그라운드에서 독립적으로 실행할 수 있는 서비스 워커에 대해 공부했습니다.",
    path: "/js/service-worker.mdx",
    date: "2024년 10월 29일",
    importMdx: () => import("./service-worker.mdx"),
  },
].map((item) => ({ ...item, type: "JS" }));
