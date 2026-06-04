import { Hero } from "~/components/hero";
import ProjectList from "~/components/project-list";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Project Page" },
		{ name: "description", content: "Project Page" },
		{ property: "og:title", content: "Blog" },
		{
			property: "og:description",
			content: "Project Page",
		},
		{
			property: "og:image",
			content: `${import.meta.env.VITE_API_ENPOINT}/api/og?title=Project%20Page`,
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://porto.alfazh.dev/project" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:site", content: "@alfazh" },
		{
			property: "twitter:title",
			content: `Project Page`,
		},
		{
			property: "twitter:description",
			content: `Project Page`,
		},
		{
			property: "twitter:image",
			content: `${import.meta.env.VITE_API_ENPOINT}/api/og?title=Project%20Page`,
		},
	];
}

export default function Projects() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<Hero title="Projects Page" />

			<ProjectList />
		</div>
	);
}
