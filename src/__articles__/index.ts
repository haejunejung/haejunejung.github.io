import { blogList } from "./blog";
import { jsList } from "./js";
import { performanceList } from "./performance";
import { reactList } from "./react";

export const totalTechMdxPageList = [
  //   ...jsList,
  //   ...reactList,
  //   ...performanceList,
];

export const totalBlogMdxPageList = [...blogList];

export const totalMdxPageList = [
  ...totalTechMdxPageList,
  ...totalBlogMdxPageList,
];
