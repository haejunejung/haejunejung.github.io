"use client";

import { GITHUB_URL } from "@/consts";
import { cn } from "@/lib";
import type { HasClassName } from "@/types";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./Button";
import { SafeExternalLink } from "./SafeExternalLink";
import { SwitchCase } from "./SwitchCase";

const GithubIcon = ({ className }: HasClassName) => {
	return (
		<Button asChild={true} variant="ghost">
			<SafeExternalLink href={GITHUB_URL}>
				<SiGithub className={className} />
			</SafeExternalLink>
		</Button>
	);
};

const ThemeIcon = ({ className }: HasClassName) => {
	const { resolvedTheme, setTheme } = useTheme();
	return (
		<Button
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			variant="ghost"
		>
			<SwitchCase
				value={resolvedTheme ?? "dark"}
				caseBy={{
					dark: <Moon className={cn("cursor-pointer", className)} />,
					light: <Sun className={cn("cursor-pointer", className)} />,
				}}
			/>
		</Button>
	);
};

type IconName = "github" | "theme";

type IconProps = {
	name: IconName;
} & HasClassName;

export const Icon = ({ name, className }: IconProps) => {
	return (
		<SwitchCase
			value={name}
			caseBy={{
				github: <GithubIcon className={className} />,
				theme: <ThemeIcon className={className} />,
			}}
		/>
	);
};
