import type { HasClassName } from "@/types";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SwitchCase } from "./SwitchCase";

const GithubIcon = ({ className }: HasClassName) => {
	return <SiGithub className={className} />;
};

const ThemeIcon = ({ className }: HasClassName) => {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<SwitchCase
			value={resolvedTheme ?? "dark"}
			caseBy={{
				dark: <Moon className={className} onClick={() => setTheme("light")} />,
				light: <Sun className={className} onClick={() => setTheme("dark")} />,
			}}
		/>
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
