import { type MDXComponents as MDXComponentCases } from "mdx/types";
import { Code } from "./Code";
import { Anchor } from "./Anchor";
import { Image } from "./Image";
import { MultiReference } from "./MultiReference";
import { Callout } from "./Callout";

export const MDXComponents: MDXComponentCases = {
  code: Code,
  a: Anchor,
  img: Image,
  MultiReference,
  Callout,
};
