import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Hero } from "~/components/hero";
import ProjectCard from "~/components/project-card";
import type { ProjectModuleProps } from "~/type";

const projectsModule = import.meta.glob("../projects/*.mdx", { eager: true });

interface ProjectsListProps {
	name: string;
	description: string;
	year: string;
	slug: string;
	icon: string;
}

export default function ProjectList({ home }: { home?: boolean }) {
	const [projects, setProjects] = useState<ProjectsListProps[]>([]);

	useEffect(() => {
		Object.entries(projectsModule).forEach(([path, module], id) => {
			const projectModule = module as ProjectModuleProps;

			const { name, description, year, icon } = projectModule.frontmatter || {};
			const slug = path.split("/").pop()?.replace(".mdx", "") || "";

			setProjects((prev) => [...prev, { name, description, year, slug, icon }]);

			if (home) {
				setProjects((prev) =>
					prev
						.sort(
							(a, b) => new Date(b.year).getTime() - new Date(a.year).getTime(),
						)
						.slice(0, 2),
				);
			}
		});
	}, []);

	return (
		<div
			className={clsx(
				`${home ? "md:max-w-4xl mx-auto md:p-8 p-4 mb-20 grid md:grid-cols-2 grid-cols-1 rounded-lg justify-center gap-4" : "flex flex-col gap-4 mt-4 w-full"}`,
			)}>
			<div
				className={`${home ? "" : "hidden"} rounded-lg w-full justify-center mb-8 md:h-80 h-fit`}>
				<h2 className="text-6xl font-bold mb-4 dark:text-white">
					Selected Project
				</h2>
			</div>
			{projects
				.sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime())
				.map((project, index) => (
					<div
						key={index}
						className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
						<div className="max-w-96">
							<ProjectCard {...project} />
						</div>
					</div>
				))}
			{projects.length > 1 && home && (
				<div className="w-full flex justify-end items-end md:h-80 h-fit">
					<a
						href="/project"
						className="group flex gap-1 hover:gap-2 text-end md:text-6xl text-4xl font-bold md:mb-4 mb-8 dark:text-white">
						See more
						<ArrowUpRight className="w-12 h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-200 ease-in-out" />
					</a>
				</div>
			)}
		</div>
	);
}
