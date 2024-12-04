import { PropsWithChildren } from "react";
import { getHeaderStyles } from "./styles";
import { useTabs } from "./TabsContext";

export function TabsHeader({ children }: PropsWithChildren) {
  const { variant } = useTabs();

  return (
    <nav role="tablist" css={getHeaderStyles(variant)}>
      {children}
    </nav>
  );
}
