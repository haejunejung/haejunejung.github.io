"use client";

import { useIsClient } from "@/hooks";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
	children,
	...props
}: ComponentProps<typeof NextThemeProvider>) {
	const isClient = useIsClient();

	return isClient ? (
		<NextThemeProvider {...props}>{children}</NextThemeProvider>
	) : (
		<>{children}</>
	);
}
