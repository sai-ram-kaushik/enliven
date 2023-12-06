import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = () => {
    const folder = "./modules";
    const files = fs.readdirSync(folder);

    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${folder}/${filename}`, "utf-8");
        const matterResult = matter(fileContents);

        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            slug: filename.replace(".md", "")
        }
    })

    return posts;
}