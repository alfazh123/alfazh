import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero";
import PostList from "~/components/post-list";
import ProjectList from "~/components/project-list";
import Experience from "~/components/experience";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Alfazh" },
		{ name: "description", content: "Alfazh's Portfolio" },
		{ property: "og:title", content: "Alfazh" },
		{
			property: "og:description",
			content: "Alfazh's Portfolio",
		},
		{
			property: "og:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=Alfazh%20Portfolio`,
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://porto.alfazh.dev" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:site", content: "@alfazh" },
		{
			property: "twitter:title",
			content: `Alfazh Portfolio`,
		},
		{
			property: "twitter:description",
			content: `Alfazh Portfolio`,
		},
		{
			property: "twitter:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=Alfazh%20Portfolio`,
		},
	];
}

export default function Home() {
	return (
		<div className="home px-4 overflow-clip">
			<HeroIndex />
			<ProjectList home />
			<PostList home />
			<Experience />
		</div>
	);
}
