import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BlogBanner from "~/components/blog-banner";
import type { PostFrontMatter, PostModuleProps } from "~/type";
import BlogContent from "~/components/blog-content";

export default function DetailPost() {
	const location = useLocation();
	const slug = location.pathname.split("/").pop();

	const contentModule = import.meta.glob("../posts/*.mdx", { eager: true });
	const [frontMatter, setFrontMatter] = useState<PostFrontMatter>();
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

			<BlogContent>
				<div className="absolute md:flex hidden top-0 right-0 w-fit px-2 h-10 bg-amber-200 rotate-12 z-10 items-center justify-center">
					{frontMatter?.date}
				</div>
				{Content ? <Content /> : null}
			</BlogContent>
		</div>
	);
}