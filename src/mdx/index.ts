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

export const mdxContentList = [
  {
    title: "JavaScript 공부 기록",
    items: jsList,
  },
  {
    title: "React 공부 기록",
    items: reactList,
  },
  {
    title: "Web API 공부 기록",
    items: webapiList,
  },
  {
    title: "Performance 공부 기록",
    items: performanceList,
  },
];
