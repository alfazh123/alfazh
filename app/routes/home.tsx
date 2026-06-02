import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero";
import PostList from "~/components/post-list";
import ProjectList from "~/components/project-list";
import Experience from "~/components/experience";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Alfazh" },
		{ name: "description", content: "Alfazh portfolio" },
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
