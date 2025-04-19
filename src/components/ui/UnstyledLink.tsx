import type { PropsWithChildren } from "react";
import { Link, type LinkProps } from "react-router";

export const UnstyledLink = (
	props: PropsWithChildren<LinkProps> & React.RefAttributes<HTMLAnchorElement>,
) => {
	const { children, ...rest } = props;
	return (
		<Link
			css={{
				textDecoration: "none",
				color: "inherit",
			}}
			{...rest}
		>
			{children}
		</Link>
	);
};
