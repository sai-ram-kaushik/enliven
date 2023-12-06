import fs from "fs";
import matter from "gray-matter";

export const getModuleContent = (slug) => {
    const folder = "./modules";
    const file = `${folder}/${slug}.md`;

    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult.content;
}