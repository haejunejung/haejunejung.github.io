import { ClipboardIcon } from "./ClipboardIcon";
import { ClipboardRoot } from "./ClipboardRoot";
import { ClipboardTrigger } from "./ClipboardTrigger";

export const Clipboard = Object.assign(ClipboardRoot, {
  Root: ClipboardRoot,
  Trigger: ClipboardTrigger,
  Icon: ClipboardIcon,
});
