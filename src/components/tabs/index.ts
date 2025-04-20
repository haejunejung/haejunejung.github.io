import { TabsContent } from "./TabsContent";
import { TabsHeader } from "./TabsHeader";
import { TabsIndicator } from "./TabsIndicator";
import { TabsRoot } from "./TabsRoot";
import { TabsTrigger } from "./TabsTrigger";

export const Tabs = Object.assign(TabsRoot, {
	Root: TabsRoot,
	Header: TabsHeader,
	Trigger: TabsTrigger,
	Indicator: TabsIndicator,
	Content: TabsContent,
});
