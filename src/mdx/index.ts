import { webapiList } from "./webapi";
import { performanceList } from "./performance";
import { reactList } from "./react";
import { jsList } from "./js";

export const totalMdxPageList = [
  ...jsList,
  ...webapiList,
  ...performanceList,
  ...reactList,
];

export const mdxPostList = {
  JS: jsList,
  React: reactList,
  WebAPI: webapiList,
  Performance: performanceList,
} as const;

export const mdxPostTabList = ["JS", "React", "WebAPI", "Performance"] as const;