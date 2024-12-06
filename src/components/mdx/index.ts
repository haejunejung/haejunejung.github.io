import { type MDXComponents as MDXComponentCases } from "mdx/types";
import { Callout } from "./Callout";
import { Code } from "./Code";

export const MDXComponents: MDXComponentCases = {
  pre: Code,
  Callout,
};
