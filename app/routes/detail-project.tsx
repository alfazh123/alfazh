import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BlogBanner from "~/components/blog-banner";
import type { ProjectFrontMatter, ProjectModuleProps } from "~/type";
import BlogContent from "~/components/blog-content";
import { setTitleOg } from "~/hook/useOpenGraph";
import type { Route } from "../+types/root";

export function meta({ params }: Route.MetaArgs) {
	return [
		{ title: `${setTitleOg({ title: params?.id, blog: true })}` },
		{
			property: "og:image",
			content: `${import.meta.env.VITE_API_ENDPOINT}/api/og?title=${setTitleOg({ title: params?.id, blog: true })}&blog=true`,
		},
		{
			name: "description",
			content: `${setTitleOg({ title: params?.id, blog: true })}, Project by Alfazh`,
		},
		{
			property: "og:title",
			content: `${setTitleOg({ title: params?.id, blog: true })}`,
		},
		{
			property: "og:description",
			content: `${setTitleOg({ title: params?.id, blog: true })}, Project by Alfazh`,
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
			content: `${setTitleOg({ title: params?.id, blog: true })}, Project by Alfazh`,
		},
		{
			property: "twitter:image",
			content: `${import.meta.env.VITE_API_ENDPOINT}/api/og?title=${setTitleOg({ title: params?.id, blog: true })}&blog=true`,
		},
	];
}

export default function DetailProject() {
	const location = useLocation();
	const slug = location.pathname.split("/").pop();

	const contentModule = import.meta.glob("../projects/*.mdx", { eager: true });
	const [frontMatter, setFrontMatter] = useState<ProjectFrontMatter>();
	const [Content, setContent] = useState<React.ComponentType | null>(null);

	useEffect(() => {
		Object.entries(contentModule).forEach(([path, module]) => {
			const projectModule = module as ProjectModuleProps;

			const fileSlug = path.split("/").pop()?.replace(".mdx", "") || "";
			if (fileSlug === slug) {
				setContent(() => projectModule.default);
				setFrontMatter(projectModule.frontmatter);
			}
		});

		if (!document) return;
	}, [slug]);

    console.log(frontMatter)

	return (
		<div className="pt-20">
			{frontMatter?.banner && (
				<BlogBanner imgUrl={frontMatter?.banner} />
			)}

			<BlogContent>
				<div className="absolute md:flex hidden top-0 right-0 w-fit px-2 h-10 bg-amber-200 rotate-12 z-10 items-center justify-center">
					{frontMatter?.year}
				</div>
				{Content ? <Content /> : null}
			</BlogContent>
		</div>
	);
}