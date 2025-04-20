import type { MDXComponents as mdxComponentCases } from "mdx/types";
import { Anchor, MultiAnchor } from "./Anchor";
import { Callout } from "./Callout";
import { Code } from "./Code";

export const MDXComponents: mdxComponentCases = {
	pre: Code,
	Anchor,
	MultiAnchor,
	Callout,
};
