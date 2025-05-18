"use client";

import { GITHUB_URL, LINKEDIN_URL } from "@/consts";
import { usePreservedCallback } from "@/hooks";
import { cn } from "@/lib";
import type { HasClassName } from "@/types";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SafeExternalLink } from "./SafeExternalLink";
import { SwitchCase } from "./SwitchCase";

const GithubIcon = ({ className }: HasClassName) => {
	return (
		<SafeExternalLink href={GITHUB_URL}>
			<SiGithub className={cn("w-6 h-6", className)} />
		</SafeExternalLink>
	);
};

const LinkedinIcon = ({ className }: HasClassName) => {
	return (
		<SafeExternalLink href={LINKEDIN_URL}>
			<Linkedin className={cn("w-6 h-6", className)} />
		</SafeExternalLink>
	);
};

const ThemeIcon = ({ className }: HasClassName) => {
	const { resolvedTheme, setTheme } = useTheme();

	const toggle = usePreservedCallback(() => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	});

	return (
		<SwitchCase
			value={resolvedTheme ?? "dark"}
			caseBy={{
				dark: <Moon className={cn(className)} size={16} onClick={toggle} />,
				light: <Sun className={cn(className)} size={16} onClick={toggle} />,
			}}
		/>
	);
};

type IconName = "github" | "theme" | "linkedin";

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
				linkedin: <LinkedinIcon className={className} />,
			}}
		/>
	);
};
