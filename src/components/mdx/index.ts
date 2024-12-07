import { type MDXComponents as MDXComponentCases } from "mdx/types";
import { Code } from "./Code";
import { Anchor, MultiAnchor } from "./Anchor";
import { Callout } from "./Callout";

export const MDXComponents: MDXComponentCases = {
  pre: Code,
  Anchor,
  MultiAnchor,
  Callout,
};
