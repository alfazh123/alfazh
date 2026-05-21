import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BlogBanner from "~/components/blog-banner";
import clsx from "clsx";
import type { FrontMatter, PostModuleProps } from "~/type";

export default function DetailPost() {
	const location = useLocation();
	const slug = location.pathname.split("/").pop();

	const contentModule = import.meta.glob("../posts/*.mdx", { eager: true });
	const [frontMatter, setFrontMatter] = useState<FrontMatter>();
	const [Content, setContent] = useState<React.ComponentType | null>(null);

	useEffect(() => {
		Object.entries(contentModule).forEach(([path, module]) => {
			const postModule = module as PostModuleProps;

			const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
			if (fileSlug === slug) {
				setContent(() => postModule.default);
				setFrontMatter(postModule.frontmatter);
			}
		});
	}, [slug]);

	return (
		<div className="pt-20">
			{frontMatter?.bannerImgUrl && (
				<BlogBanner imgUrl={frontMatter?.bannerImgUrl} />
			)}

			<div
				className={clsx(
					"prose prose-headings:mx-auto prose-headings:max-w-2xl prose-headings:w-full",
					"prose-p:mx-auto prose-p:max-w-2xl prose-p:w-full prose-p:text-lg prose-p:mb-0 prose-img:mb-0 prose-img:rounded-lg prose-img:border prose-img:mx-auto",
					"prose-code:before:content-none prose-code:after:content-none",
					"prose-ul:mx-auto prose-ul:max-w-2xl prose-ul:w-full prose-ol:mx-auto prose-ol:max-w-2xl prose-ol:w-full prose-li:mb-0",
					"dark:prose-p:text-slate-200 dark:prose-headings:text-white dark:prose-li:text-white dark:prose-code:text-white dark:prose-a:text-white dark:prose-strong:text-white",
					"relative mt-20 flex flex-col justify-center min-h-screen max-w-4xl w-full mx-auto px-8 mb-20",
				)}>
				<div className="absolute md:flex hidden top-0 right-0 w-fit px-2 h-10 bg-amber-200 rotate-12 z-10 items-center justify-center">
					{frontMatter?.date}
				</div>
				{Content ? <Content /> : null}
			</div>
		</div>
	);
}