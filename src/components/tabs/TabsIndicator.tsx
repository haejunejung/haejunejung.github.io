import { useTabs } from "./TabsContext";
import { getIndicatorStyles } from "./styles";

export function TabsIndicator() {
  const { indicatorRect } = useTabs();
  return <div css={getIndicatorStyles(indicatorRect)} />;
}
