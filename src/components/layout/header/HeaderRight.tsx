import type { PropsWithChildren } from "react";

export function HeaderRight({ children }: PropsWithChildren) {
	return (
		<div
			css={{
				display: "flex",
				flexDirection: "row",
				gap: "var(--spacing4)",
				marginRight: "var(--spacing7)",
			}}
		>
			{children}
		</div>
	);
}
