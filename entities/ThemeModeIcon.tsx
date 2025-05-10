"use client";

import { SwitchCase } from "@/components/common";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeModeIcon() {
	const { resolvedTheme, setTheme } = useTheme();

	const handleToggle = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<SwitchCase
			value={resolvedTheme}
			caseBy={{
				dark: <Moon onClick={handleToggle} />,
				light: <Sun onClick={handleToggle} />,
			}}
		/>
	);
}
