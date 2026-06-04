import type { PostModuleProps } from "~/type";

const titleProjectBlog = {
    _title: "Alfazh Portfolio",

    get titlePage() {
        return this._title;
    },

    set titlePage(title: string) {
        this._title = title;
    }
}

export function setTitleOg({title, blog}: {title: string | undefined, blog?: boolean}) {

    let contentModule;
    
    if (blog) {
        contentModule = import.meta.glob(`../posts/*.mdx`, { eager: true });
    } else {
        contentModule = import.meta.glob(`../projects/*.mdx`, { eager: true });
    }

    Object.entries(contentModule).forEach(([path, module]) => {
        const postModule = module as PostModuleProps;

        const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
        if (fileSlug === title) {
            const {title} = postModule.frontmatter;
            titleProjectBlog.titlePage = title;
        }
    });

    return titleProjectBlog.titlePage;
}