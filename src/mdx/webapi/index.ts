import { MDXPageProps } from "@/types/MDXPageProps";
import ServiceWorker from "./assets/service-worker.jpg";
import WebStorage from "./assets/web-storage.png";

export const webapiList: MDXPageProps[] = [
  {
    thumnailSrc: WebStorage,
    title: "Web Storage",
    description:
      "브라우저에 데이터를 저장하는 방법, LocalStorage, SessionStorage, IndxedDB에 대해 공부했습니다.",
    path: "/webapi/web-storage.mdx",
    date: "2024년 11월 1일",
    importMdx: () => import("./web-storage.mdx"),
  },
  {
    thumnailSrc: ServiceWorker,
    title: "Service Worker",
    description:
      "웹 애플리케이션의 백그라운드에서 독립적으로 실행할 수 있는 서비스 워커에 대해 공부했습니다.",
    path: "/webapi/service-worker.mdx",
    date: "2024년 10월 29일",
    importMdx: () => import("./service-worker.mdx"),
  },
];
