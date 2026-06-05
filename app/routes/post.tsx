import { Hero } from "~/components/hero";
import PostList from "~/components/post-list";
import type { Route } from "../+types/root";
import { createMeta } from "~/components/metadata";

export function meta({}: Route.MetaArgs) {
	return createMeta({
		title: "Blogs",
		description: "Blogs that Alfazh write",
		image: "/og/home.png",
	});
}

export default function Post() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<Hero title="Blog Page" />
			<PostList />
		</div>
	);
}
