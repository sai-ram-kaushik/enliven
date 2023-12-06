import { getModuleContent } from "@/utils/getModuleContent";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

export default function page({ params }) {

    const slug = params.slug;

    const content = getModuleContent(slug);

    return (
        <main>
            <Markdown>
                {content}
            </Markdown>
        </main>
    )
}