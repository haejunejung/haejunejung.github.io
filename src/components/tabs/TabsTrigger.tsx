import type { PropsWithChildren } from "react";
import { useTabs } from "./TabsContext";
import { getTriggerStyles } from "./styles";
import type { Tab } from "./types";

interface TabsTriggerProps {
	tab: Tab;
}

export function TabsTrigger({
	children,
	tab,
}: PropsWithChildren<TabsTriggerProps>) {
	const { selectedTab, handleSelectedTab, tabRefs, variant } = useTabs();
	const isSelected = tab === selectedTab;

	return (
		<button
			type="button"
			role="tab"
			data-tab-value={tab}
			onClick={() => handleSelectedTab(tab)}
			ref={(el) => {
				if (el && !tabRefs.current?.includes(el)) {
					tabRefs.current?.push(el);
				}
			}}
			css={getTriggerStyles(variant, isSelected)}
		>
			{children}
		</button>
	);
}
