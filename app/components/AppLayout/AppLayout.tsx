import type { CSSProperties, ReactNode } from "react";
import { AppSidebar } from "~/components/AppLayout/AppSidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export const AppLayout = ({ children }: { children: ReactNode }) => {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "19rem",
				} as CSSProperties
			}
		>
			<AppSidebar />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	);
};
