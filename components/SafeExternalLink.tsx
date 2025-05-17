import { cn } from "@/lib";
import type { HasChildren, HasClassName } from "@/types";

type SafeExternalLinkProps = {
	href: string;
} & HasChildren &
	HasClassName;

export const SafeExternalLink = ({
	href,
	children,
	className,
}: SafeExternalLinkProps) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn("text-inherit", className)}
		>
			{children}
		</a>
	);
};
