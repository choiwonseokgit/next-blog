/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlockQuote } from "./block-quote";
import { Image } from "./image";
import { Link } from "./link";
import { MDXComponents } from "mdx/types";

export const MdxComponents: MDXComponents = {
  a: Link as any,
  img: Image as any,
  blockquote: BlockQuote,
};
