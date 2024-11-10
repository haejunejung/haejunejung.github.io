import { MDXItemProps } from "@/types/MDXItemProps";

export const reactList: MDXItemProps[] = [
  {
    title: "React.FC",
    summary: "React.FC 사용해야 할까?",
    path: "/react/react-fc.mdx",
    importMdx: () => import("./react-fc.mdx"),
  },
];
