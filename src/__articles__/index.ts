import { blogList } from "./blog";
import { techList } from "./tech";

export const totalTechMdxPageList = [...techList];

export const totalBlogMdxPageList = [...blogList];

export const totalMdxPageList = [
	...totalTechMdxPageList,
	...totalBlogMdxPageList,
];
