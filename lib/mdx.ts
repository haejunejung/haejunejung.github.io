import fs from "fs";
import path from "path";
import grayMatter from "gray-matter"
import { OpenGraph } from "@/types";

export const getMdxFiles = (dir: string) => {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export const readMdxFile = (filePath: string): { openGraph : OpenGraph, content: string } => {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data: openGraph, content } = grayMatter(rawContent);
    return { openGraph , content } as { openGraph : OpenGraph, content: string };
}

export const getMdxData = (dir: string) => {
    const mdxFiles = getMdxFiles(dir);
    return mdxFiles.map((file) => {
        const { openGraph, content } = readMdxFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return { 
            slug, 
            openGraph,
            content,
        } 
    })
}

export const getMdxArticles = () => {
    return getMdxData(path.join(process.cwd(), "articles"));
}
