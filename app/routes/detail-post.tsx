import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface FrontMatter {
	title: string;
	date: string;
	tags?: string[];
	slug: string;
}

export default function DetailPost() {
	const location = useLocation();
	const slug = location.pathname.split("/").pop();

	const contentModule = import.meta.glob("../posts/*.mdx", { eager: true });
	const [frontMatter, setFrontMatter] = useState<FrontMatter>();
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		Object.entries(contentModule).forEach(([path, module]) => {
			const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
			if (fileSlug === slug) {
				setContent(module.default);
				setFrontMatter(module.frontmatter);
			}
		});
	}, [slug]);

	console.log(content);

	return (
		<div className="relative prose prose-p:text-lg prose-p:mb-0 prose-img:mb-0 prose-code:before:content-none prose-code:after:content-none prose-img:rounded-lg prose-img:border mt-20 flex flex-col justify-center min-h-screen max-w-4xl w-full mx-auto px-8 mb-20">
			{/* <h1 className="text-4xl font-bold">Blog</h1> */}
			{/* 3. Panggil layaknya komponen React biasa */}
			<div className="absolute md:flex hidden top-0 right-0 w-30 h-10 bg-amber-200 rotate-12 z-10 items-center justify-center">
				{frontMatter?.date}
			</div>
			{content}
		</div>
	);
}