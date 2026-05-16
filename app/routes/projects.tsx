import { Hero } from "~/components/hero";
import ProjectCard from "~/components/project-card";
import { projects } from "~/utils/data";

export default function Projects() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<Hero title="Projects Page" />

			<div className="flex flex-col gap-4 mt-4 w-full">
				{projects.map((project, index) => (
					<div
						key={index}
						className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
						<div className="max-w-96">
							<ProjectCard {...project} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
