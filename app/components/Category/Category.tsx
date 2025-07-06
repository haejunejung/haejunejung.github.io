import { useMemo } from "react";
import type { PostCategory, RemoveSpaces } from "~/types";
import { Badge, type BadgeVariant } from "../ui/badge";

interface CategoryProps {
	category: string;
}

const variantMap: Record<
	Uppercase<RemoveSpaces<PostCategory>>,
	BadgeVariant
> = {
	ESSAY: "default",
	TECH: "blue",
	REACT: "blue",
	ZOD: "blue",
	REACTROUTER: "blue",
	APOLLOCLIENT: "blue",
} as const;

export const Category = ({ category }: CategoryProps) => {
	const variant = useMemo(() => {
		const uppercasedCategory = category.toUpperCase();
		const removedSpacesCategory = uppercasedCategory.replace(/\s/g, "");
		return variantMap[removedSpacesCategory as keyof typeof variantMap];
	}, [category]);

	return <Badge variant={variant}>{category}</Badge>;
};
