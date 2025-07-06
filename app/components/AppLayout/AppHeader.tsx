import type { ReactNode } from "react";
import { SidebarTrigger } from "../ui/sidebar";

export const AppHeader = ({ children }: { children?: ReactNode }) => {
	return (
		<header className="flex h-16 shrink-0 items-center gap-2 px-4 justify-between">
			<section className="flex items-center">
				<SidebarTrigger className="-ml-1" />
				{children}
			</section>
		</header>
	);
};
