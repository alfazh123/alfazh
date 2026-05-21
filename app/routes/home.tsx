import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero";
import ProjectCard from "~/components/project-card";
import { projects } from "~/utils/data";
import PostList from "~/components/post-list";

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

			<div className="md:max-w-4xl mx-auto md:p-8 p-4 grid md:grid-cols-2 grid-cols-1 rounded-lg justify-center gap-4">
				<div className="rounded-lg w-full justify-center mb-8 md:h-80 h-fit">
					<h2 className="text-6xl font-bold mb-4 dark:text-white">
						Selected Project
					</h2>
				</div>
				{projects.map((project, index) => (
					<ProjectCard {...project} key={index} />
				))}
			</div>
			<PostList home />
		</div>
	);
}
