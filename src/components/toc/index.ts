import { TocList } from "./TocList";
import { TocRoot } from "./TocRoot";
import { TocTrigger } from "./TocTrigger";

export const Toc = Object.assign(TocRoot, {
  Root: TocRoot,
  List: TocList,
  Trigger: TocTrigger,
});
