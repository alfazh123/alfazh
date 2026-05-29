import clsx from "clsx";
import { useEffect, useState } from "react";
import { Hero } from "~/components/hero";
import ProjectCard from "~/components/project-card";
import type { ProjectModuleProps } from "~/type";

const projectsModule = import.meta.glob("../projects/*.mdx", { eager: true });

interface ProjectsListProps {
    name: string;
    description: string;
    year: number;
    slug: string;
}

export default function ProjectList({home}: {home?: boolean}) {
    const [projects, setProjects] = useState<ProjectsListProps[]>([]);

    useEffect(() => {
        Object.entries(projectsModule).forEach(([path, module], id) => {
            const projectModule = module as ProjectModuleProps;

            const { name, description, year, banner } =
                projectModule.frontmatter || {};
            const slug = path.split("/").pop()?.replace(".mdx", "") || "";

            setProjects((prev) => [
                ...prev,
                { name, description, year, banner, slug },
            ]);
        });
    }, []);

    return (
            <div className={clsx(`${home ? 'md:p-8 p-4 grid md:grid-cols-2 grid-cols-1 rounded-lg justify-center gap-4' : 'flex flex-col gap-4 mt-4 w-full'}`)}>
                <div className={`${home ? '' : 'hidden'} rounded-lg w-full justify-center mb-8 md:h-80 h-fit`}>
					<h2 className="text-6xl font-bold mb-4 dark:text-white">
						Selected Project
					</h2>
				</div>
                {projects.sort((a, b) => (b.year-a.year)).map((project, index) => (
                    <div
                        key={index}
                        className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                        <div className="max-w-96">
                            <ProjectCard {...project} />
                        </div>
                    </div>
                ))}
            </div>
    );
}
