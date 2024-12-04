import { PaginationEllipsis } from "./PaginationEllipsis";
import { PaginationItem } from "./PaginationItem";
import { PaginationNextTrigger } from "./PaginationNextTrigger";
import { PaginationPrevTrigger } from "./PaginationPrevTrigger";
import { PaginationRoot } from "./PaginationRoot";

export const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  PrevTrigger: PaginationPrevTrigger,
  NextTrigger: PaginationNextTrigger,
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
});
