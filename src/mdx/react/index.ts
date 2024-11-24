import { MDXPageProps } from "@/types/MDXPageProps";
import ReactFC from "./assets/react-fc.png";

export const reactList: MDXPageProps[] = [
  {
    thumnailSrc: ReactFC,
    title: "React.FC",
    description:
      "함수형 컴포넌트에 타입을 지정하는 방법 React.FC를 사용해야 할까?",
    path: "/react/react-fc.mdx",
    date: "2024년 11월 5일",
    importMdx: () => import("./react-fc.mdx"),
  },
];
