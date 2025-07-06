import z from "zod";

export const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.date(),
	categories: z.array(z.string()).or(z.string()),
	slug: z.string(),
});

export type PostSchema = z.infer<typeof postSchema>;
