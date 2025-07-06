import type { ReactNode } from "react";
import React from "react";

export const ListWithDivider = ({
	children,
	divider,
}: { children: ReactNode; divider: ReactNode }) => {
	const childrenArray = React.Children.toArray(children);
	const lastIndex = childrenArray.length - 1;

	return (
		<div className="flex flex-col gap-4">
			{childrenArray.map((child, index) => (
				<React.Fragment key={`${index}-${child}`}>
					{child}
					{index !== lastIndex && divider}
				</React.Fragment>
			))}
		</div>
	);
};
