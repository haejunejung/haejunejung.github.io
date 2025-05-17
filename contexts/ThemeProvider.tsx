"use client";

import { useIsClient } from "@/hooks";
import type { HasChildren } from "@/types";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: HasChildren) => {
	const isClient = useIsClient();

	if (!isClient) {
		return <>{children}</>;
	}

	return (
		<NextThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem={true}
			disableTransitionOnChange={true}
		>
			{children}
		</NextThemeProvider>
	);
};
