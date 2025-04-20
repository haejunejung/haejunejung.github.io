import { createSafeContext } from "@/utils";
import type { IndicatorRect, Tab, Variant } from "./types";
import type { RefObject } from "react";

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
