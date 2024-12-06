import { type MDXComponents as MDXComponentCases } from "mdx/types";
import { Code } from "./Code";
import { Anchor, MultiAnchor } from "./Anchor";

export const MDXComponents: MDXComponentCases = {
  pre: Code,
  Anchor,
  MultiAnchor,
};
