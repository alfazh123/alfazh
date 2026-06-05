import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero";
import PostList from "~/components/post-list";
import ProjectList from "~/components/project-list";
import Experience from "~/components/experience";
import { createMeta } from "~/components/metadata";

export function meta() {
	return createMeta({
		title: "Ahmd Alfazh",
		description: "Ahmd Alfazh Portfolio",
		image: "/og/home.png",
	});
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
