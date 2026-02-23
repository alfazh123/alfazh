import { ArrowUpRight } from "lucide-react";
import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero-index";
import { VscGithubAlt } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { GoMail } from "react-icons/go";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	const projects = [
		{
			name: "Project 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Project 2",
			description:
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	const writes = [
		{
			title: "Write 1",
			year: 2023,
			topics: ["React", "TypeScript", "Web Development"],
		},
		{
			title: "Write 2",
			year: 2024,
			topics: ["JavaScript", "Frontend", "Programming"],
		},
	];

	const contacts = [
		{
			type: <GoMail className="h-6 w-6" />,
			value: "alfazh.work@gmail.com",
		},
		{
			type: <SiLinkedin className="h-6 w-6" />,
			value: "https://www.linkedin.com/in/ahmd-mufahras-li-alfazh-assardew/",
		},
		{
			type: <VscGithubAlt className="h-6 w-6" />,
			value: "https://github.com/alfazh123",
		},
	];

	return (
		<div className="home px-4">
			{/* <HeroIndex /> */}
			<div className="h-[50vh] max-w-4xl mx-auto px-12 flex flex-col justify-center py-8">
				<div className="flex flex-col z-50 bg-slate-50 w-fit">
					<div className="text-8xl font-bold">Ahmd Alfazh</div>
					<div>
						I'm a FrontEnd Developer Experience in React, NextJs, and Tailwind
						CSS.
					</div>
				</div>
			</div>

			<div className="md:max-w-4xl mx-auto p-8 flex flex-col rounded-lg h-[50vh] justify-center">
				<div className="rounded-lg w-full justify-center text-center mb-8">
					<h2 className="text-6xl font-bold mb-4">Selected Project</h2>
				</div>
				<div className="flex flex-col h-fit">
					{projects.map((project, index) => (
						<div
							key={index}
							className="border-b border-gray-300 p-4 rounded-lg flex justify-between items-center">
							<div>
								<h3 className="text-2xl font-semibold">{project.name}</h3>
								<p className="text-gray-600">{project.description}</p>
							</div>
							<div>
								<ArrowUpRight className="w-8 h-8" />
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="md:max-w-4xl mx-auto p-8 flex flex-col rounded-lg h-[50vh] justify-center">
				<div className="rounded-lg w-full justify-center text-center mb-8">
					<h2 className="text-6xl font-bold mb-4">Selected Writes</h2>
				</div>
				<div className="flex flex-col h-fit">
					{writes.map((write, index) => (
						<div
							key={index}
							className="border-b border-gray-300 p-4 rounded-lg flex justify-between items-center">
							<div>
								<h3 className="text-2xl font-semibold">{write.title}</h3>
								<div className="flex gap-2">
									{write.topics.map((topic, id) => (
										<div
											key={id}
											className="text-gray-600 bg-slate-100 px-2 py-1 rounded text-sm">
											{topic}
										</div>
									))}
								</div>
							</div>
							<div>
								<ArrowUpRight className="w-8 h-8" />
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Contacs */}
			<div className="md:max-w-4xl mx-auto p-8 flex flex-col rounded-lg h-[50vh] justify-center">
				<div className="rounded-lg w-full justify-center text-center mb-8">
					<h2 className="text-6xl font-bold mb-4">Contacts</h2>
				</div>
				<div className="flex gap-8 justify-center">
					{contacts.map((contact, index) => (
						<div
							key={index}
							className="border border-gray-300 w-14 h-14 p-4 rounded-full flex justify-center items-center">
							<a href={contact.value} target="_blank" rel="noopener noreferrer">
								{contact.type}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
