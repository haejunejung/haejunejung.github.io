import type { MDXComponents as mdxComponentCases } from "mdx/types";
import { Code } from "./Code";
import { Anchor, MultiAnchor } from "./Anchor";
import { Callout } from "./Callout";

export const MDXComponents: mdxComponentCases = {
  pre: Code,
  Anchor,
  MultiAnchor,
  Callout,
};
