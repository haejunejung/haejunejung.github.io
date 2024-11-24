import { MDXComponents as MDXComponentsProps } from "mdx/types";
import Code from "./code/Code";
import Anchor from "./anchor/Anchor";
import Image from "./image/Image";
import MultiReference from "./anchor/MultiReferences";
import { Reference } from "./anchor/MultiReferences";

const MDXComponents: MDXComponentsProps = {
  code: Code,
  a: Anchor,
  img: Image,
  MultiReference,
  Reference,
};

export default MDXComponents;
