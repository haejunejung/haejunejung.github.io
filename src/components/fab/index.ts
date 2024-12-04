import { FabContent } from "./FabContent";
import { FabIcon } from "./FabIcon";
import { FabOverlay } from "./FabOverlay";
import { FabRoot } from "./FabRoot";
import { FabTrigger } from "./FabTrigger";

export const Fab = Object.assign(FabRoot, {
  Root: FabRoot,
  Trigger: FabTrigger,
  Icon: FabIcon,
  Overlay: FabOverlay,
  Content: FabContent,
});
