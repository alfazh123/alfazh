import type { PostModuleProps, ProjectModuleProps } from "~/type";

const titleProjectBlog = {
	_title: "Alfazh Portfolio",

	get titlePage() {
		return this._title;
	},

	set titlePage(title: string) {
		this._title = title;
	},
};

export function setTitleBlogOg({ title }: { title: string | undefined }) {
	const contentModule = import.meta.glob(`../posts/*.mdx`, { eager: true });

	Object.entries(contentModule).forEach(([path, module]) => {
		const postModule = module as PostModuleProps;

		const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
		if (fileSlug === title) {
			const { title } = postModule.frontmatter;
			titleProjectBlog.titlePage = title;
		}
	});

	return titleProjectBlog.titlePage;
}

export function setTitleProjectOg({ title }: { title: string | undefined }) {
	const contentModule = import.meta.glob(`../projects/*.mdx`, { eager: true });

	Object.entries(contentModule).forEach(([path, module]) => {
		const postModule = module as ProjectModuleProps;

		const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
		if (fileSlug === title) {
			const { name } = postModule.frontmatter;
			titleProjectBlog.titlePage = name;
		}
	});

	return titleProjectBlog.titlePage;
}
