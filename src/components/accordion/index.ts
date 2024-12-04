import { AccordionContent } from "./AccordionContent";
import { AccordionIndicator } from "./AccordionIndicator";
import { AccordionItem } from "./AccordionItem";
import { AccordionRoot } from "./AccordionRoot";
import { AccordionTrigger } from "./AccordionTrigger";

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
  Item: AccordionItem,
  Content: AccordionContent,
  Indicator: AccordionIndicator,
});
