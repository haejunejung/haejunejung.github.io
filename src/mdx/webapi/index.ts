import { MDXItemProps } from "@/types/MDXItemProps";

export const webapiList: MDXItemProps[] = [
  {
    title: "서비스 워커 톺아보기",
    summary:
      "웹 애플리케이션 백그라운드에서 동작하는 서비스 워커에 대해 공부했습니다.",
    path: "/webapi/service-worker",
    importMdx: () => import("./service-worker.mdx"),
  },
];
