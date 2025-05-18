import type { HasChildren } from "@/types";
import Image from "next/image";
import { Card } from "./Card";

const ArticleRoot = ({ children }: HasChildren) => {
	return (
		<Card className="p-0 gap-0 group transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl ">
			{children}
		</Card>
	);
};

const ArticleImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={250}
			height={250}
			className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
		/>
	);
};

const ArticleContent = ({ children }: HasChildren) => {
	return <div className="flex flex-col gap-2 p-4">{children}</div>;
};

const ArticleTitle = ({ title }: { title: string }) => {
	return (
		<p className="text-xl font-bold group-hover:text-blue-500 group-hover:underline break-words line-clamp-2">
			{title}
		</p>
	);
};

const ArticleDescription = ({ description }: { description: string }) => {
	return <p className="text-sm break-words line-clamp-3">{description}</p>;
};

const ArticleDate = ({ date }: { date: string }) => {
	return <p className="text-sm text-gray-500">{date}</p>;
};

export const Article = Object.assign(ArticleRoot, {
	Title: ArticleTitle,
	Description: ArticleDescription,
	Date: ArticleDate,
	Image: ArticleImage,
	Content: ArticleContent,
});
