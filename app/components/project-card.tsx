import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
	name,
	description,
	slug,
	year,
	icon,
}: {
	name: string;
	description: string;
	slug: string;
	year: string;
	icon: string;
}) {
	return (
		<a
			href={`/project/${slug}`}
			rel="noopener noreferrer"
			className={clsx(
				"group relative border-b-2 border-l-2 border-t-0 border-r-0 border-gray-300 p-4 flex flex-col justify-between h-80",
				"dark:border-neutral-900 ",
			)}>
			<div>
				<h3 className="text-2xl font-semibold dark:text-white">{name}</h3>
				<p className="text-gray-600 dark:text-gray-400">{description}</p>
			</div>
			<div className="w-full flex justify-end">
				<p className="text-6xl dark:text-white">
					{new Date(year).getFullYear()}
				</p>
				<ArrowUpRight className="w-12 h-12 dark:text-white group-hover:translate-x-3 group-hover:-translate-y-3 transition-all duration-300" />
			</div>
			<img
				src={icon}
				alt="icon"
				className="absolute bottom-10 -left-5 w-32 -rotate-24 group-hover:-rotate-12 transition-all duration-300"
			/>
		</a>
	);
}
