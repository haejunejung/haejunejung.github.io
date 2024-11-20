import { webapiList } from "./webapi";
import { performanceList } from "./performance";
import { reactList } from "./react";
import { jsList } from "./js";

export const totalMdxList = [
  ...jsList,
  ...webapiList,
  ...performanceList,
  ...reactList,
];
