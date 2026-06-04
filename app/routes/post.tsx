import { Hero } from "~/components/hero";
import PostList from "~/components/post-list";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Blog page" },
		{ name: "description", content: "Blog page" },
		{ property: "og:title", content: "Blog" },
		{
			property: "og:description",
			content: "Blog page",
		},
		{
			property: "og:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=Blog%20Page`,
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://porto.alfazh.dev/blog" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:site", content: "@alfazh" },
		{
			property: "twitter:title",
			content: `Blog page`,
		},
		{
			property: "twitter:description",
			content: `Blog page`,
		},
		{
			property: "twitter:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=Blog%20Page`,
		},
	];
}

export default function Post() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<Hero title="Blog Page" />
			<PostList />
		</div>
	);
}
