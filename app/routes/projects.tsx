import { Hero } from "~/components/hero";
import ProjectList from "~/components/project-list";
import type { Route } from "../+types/root";
import { createMeta } from "~/components/metadata";

export function meta({}: Route.MetaArgs) {
	return createMeta({
		title: "Projects",
		description: "Projects that Alfazh work on it",
		image: "/og/home.png",
	});
}

export default function Projects() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<Hero title="Projects Page" />

			<ProjectList />
		</div>
	);
}
