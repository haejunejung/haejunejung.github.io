import { performanceList } from "./performance";
import { reactList } from "./react";
import { jsList } from "./js";

export const totalMdxPageList = [...jsList, ...performanceList, ...reactList];

export const mdxPostList = {
  JS: jsList,
  React: reactList,
  Performance: performanceList,
} as const;

export const mdxPostTabList = ["JS", "React", "Performance"] as const;
