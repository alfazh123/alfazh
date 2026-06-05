import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BlogBanner from "~/components/blog-banner";
import type { ProjectFrontMatter, ProjectModuleProps } from "~/type";
import BlogContent from "~/components/blog-content";
import { setTitleOg } from "~/hook/useOpenGraph";
import type { Route } from "../+types/root";
import { createMeta } from "~/components/metadata";

export function meta({ params }: Route.MetaArgs) {
	return createMeta({
		title: `${setTitleOg({ title: params?.id, blog: true })}`,
		description: `${setTitleOg({ title: params?.id, blog: true })}, Project by Alfazh`,
		image: "/og/home.png",
	});
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