import { MDXItemProps } from "@/types/MDXItemProps";

export const webapiList: MDXItemProps[] = [
  {
    title: "Service Worker",
    summary:
      "웹 애플리케이션 백그라운드에서 동작하는 서비스 워커에 대해 공부했습니다.",
    path: "/webapi/service-worker.mdx",
    importMdx: () => import("./service-worker.mdx"),
  },
  {
    title: "Web Storage",
    summary: "브라우저에 데이터를 저장하는 웹 스토리지에 대해 공부했습니다.",
    path: "/webapi/web-storage.mdx",
    importMdx: () => import("./web-storage.mdx"),
  },
];
