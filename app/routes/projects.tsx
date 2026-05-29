import { Hero } from "~/components/hero";
import ProjectList from "~/components/project-list";

export default function Projects() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<Hero title="Projects Page" />

			<ProjectList />
		</div>
	);
}
