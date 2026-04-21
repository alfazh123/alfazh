import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero-index";
import WriteCard from "~/components/write-card";
import ProjectCard from "~/components/project-card";
import { projects, writes } from "~/utils/data";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className="home px-4 overflow-clip">
			<HeroIndex />

			<div className="md:max-w-4xl mx-auto md:p-8 p-4 grid md:grid-cols-2 grid-cols-1 rounded-lg justify-center gap-4">
				<div className="rounded-lg w-full justify-center mb-8 md:h-80 h-fit">
					<h2 className="text-6xl font-bold mb-4">Selected Project</h2>
				</div>
				{projects.map((project, index) => (
					<ProjectCard {...project} key={index} />
				))}
			</div>

			<div className="md:max-w-4xl mx-auto md:px-8 px-4 grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-14 rounded-lg justify-center py-20">
				<div className="rounded-lg w-full justify-center mb-8 md:h-80 h-fit">
					<h2 className="text-6xl font-bold md:mb-4 mb-8">Selected Writes</h2>
				</div>
				{writes.map((write, index) => (
					<div
						key={index}
						className={`${index % 2 === 0 ? "sm:justify-self-start" : "sm:justify-self-end"} w-full h-80 flex justify-center`}>
						<WriteCard {...write} />
					</div>
				))}
			</div>
		</div>
	);
}
