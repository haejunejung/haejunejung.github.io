"use client";

import { type ComponentProps, useMemo } from "react";
import { Link } from "react-router";
import { useMdxFiles } from "react-router-mdx/client";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "~/components/ui/sidebar";
import { arrayify } from "~/lib";
import { GithubIcon, LinkedinIcon } from "../icons";
import AvatarSrc from "../icons/avatar.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	const files = useMdxFiles();
	const data = useMemo(() => {
		return {
			navMain: [
				{
					title: "2025",
					items: arrayify(files).map((file) => ({
						title: file.title,
						url: `/posts/${file.slug}`,
					})),
				},
			],
		};
	}, [files]);

	return (
		<Sidebar variant="floating" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild={true}>
							<div>
								<Link to="/">
									<Avatar>
										<AvatarImage src={AvatarSrc} alt="정해준" />
										<AvatarFallback>
											<Skeleton className="size-8 rounded-full" />
										</AvatarFallback>
									</Avatar>
								</Link>
								<div className="flex flex-col gap-1 leading-none">
									<span className="font-medium">정해준</span>
									<div className="flex flex-row gap-2">
										<Link to="https://www.github.com/haejunejung">
											<GithubIcon />
										</Link>
										<Link to="https://www.linkedin.com/in/%EC%A0%95-%ED%95%B4%EC%A4%80-747930325/">
											<LinkedinIcon />
										</Link>
									</div>
								</div>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className="gap-2">
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild={true}>
									<span className="font-medium">{item.title}</span>
								</SidebarMenuButton>
								<SidebarMenuSub className="ml-0 border-l-0 px-1.5">
									{item.items.map((item) => (
										<SidebarMenuSubItem key={item.title}>
											<SidebarMenuSubButton asChild={true}>
												<Link to={item.url}>{item.title}</Link>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									))}
								</SidebarMenuSub>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
