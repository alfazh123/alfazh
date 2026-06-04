import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BlogBanner from "~/components/blog-banner";
import type { PostFrontMatter, PostModuleProps } from "~/type";
import BlogContent from "~/components/blog-content";
import type { Route } from "../+types/root";
import { setTitleOg } from "~/hook/useOpenGraph";

export function meta({ params }: Route.MetaArgs) {
	return [
		{ title: `${setTitleOg({ title: params?.id, blog: true })}` },
		{
			property: "og:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=${setTitleOg({ title: params?.id, blog: true })}&blog=true`,
		},
		{
			name: "description",
			content: `${setTitleOg({ title: params?.id, blog: true })}, Blog by Alfazh`,
		},
		{
			property: "og:title",
			content: `${setTitleOg({ title: params?.id, blog: true })}`,
		},
		{
			property: "og:description",
			content: `${setTitleOg({ title: params?.id, blog: true })}, Blog by Alfazh`,
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://porto.alfazh.dev" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:site", content: "@alfazh" },
		{
			property: "twitter:title",
			content: `${setTitleOg({ title: params?.id, blog: true })}`,
		},
		{
			property: "twitter:description",
			content: `${setTitleOg({ title: params?.id, blog: true })}, Blog by Alfazh`,
		},
		{
			property: "twitter:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=${setTitleOg({ title: params?.id, blog: true })}&blog=true`,
		},
	];
}

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