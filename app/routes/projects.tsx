import ProjectCard from "~/components/project-card";
import { projects } from "~/utils/data";

export default function Projects() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-8 mb-20">
			<h1 className="md:text-8xl text-6xl font-bold mb-4">Projects Page</h1>
			{/* <p className="text-lg text-gray-600">
					This is the projects page of the application.
				</p> */}
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
