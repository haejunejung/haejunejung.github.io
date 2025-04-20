import { createSafeContext } from "@/utils";
import type { RefObject } from "react";
import type { IndicatorRect, Tab, Variant } from "./types";

interface TabsContextState {
	selectedTab: Tab;
	indicatorRect: IndicatorRect;
	tabRefs: RefObject<HTMLButtonElement[]>;
	variant: Variant;
}

interface TabsContextActions {
	handleSelectedTab(newTab: Tab): void;
}

type UseTabsReturn = TabsContextState & TabsContextActions;

export const [TabsProvider, useTabs] =
	createSafeContext<UseTabsReturn>("TabsContext");
