import type { PropsWithChildren } from "react";
import { useTabs } from "./TabsContext";
import { getHeaderStyles } from "./styles";

export function TabsHeader({ children }: PropsWithChildren) {
	const { variant } = useTabs();

	return (
		<nav role="tablist" css={getHeaderStyles(variant)}>
			{children}
		</nav>
	);
}
