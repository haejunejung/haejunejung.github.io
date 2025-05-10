"use client";

import { SwitchCase } from "@/components/common";
import { Button } from "@/components/ui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeModeToggleButton() {
	const { resolvedTheme, setTheme } = useTheme();

	const handleToggle = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<Button variant="outline" size="icon" onClick={handleToggle}>
			<SwitchCase
				value={resolvedTheme}
				caseBy={{
					dark: <Moon />,
					light: <Sun />,
				}}
			/>
		</Button>
	);
}
