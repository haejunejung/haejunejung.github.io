import type { HasChildren } from "@/types";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: HasChildren) => {
	if (typeof window === "undefined") {
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
