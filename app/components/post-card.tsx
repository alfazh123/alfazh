import clsx from "clsx";

export default function PostCard({
	title,
	link,
	date,
	topics,
	layout = "grid",
}: {
	title: string;
	link: string;
	date: string;
	topics: string[];
	layout?: "grid" | "list";
}) {
	return (
		<a
			href={link}
			rel="noopener noreferrer"
			className={clsx(
				`group relative flex flex-col`,
				`${layout === "grid" ? "aspect-4/3 max-w-96 w-full justify-between items-center text-center p-4 bg-amber-200" : "w-full hover:bg-amber-200/50 dark:text-white"}`,
				`transition-transform duration-300`,
			)}>
			<div
				className={`${layout === "list" && "hidden"} w-full rounded-lg font-mono`}>
				<p className="text-gray-500 text-sm">{date}</p>
			</div>
			<div
				className={`gochi-hand-regular w-full ${layout === "grid" ? "px-12" : ""}`}>
				<h3 className="text-4xl group-hover:underline">{title}</h3>
			</div>
			<div>
				<div className="flex gap-2 mx-auto">
					{topics.map((topic, id) => (
						<div
							key={id}
							className={`text-gray-600 font-mono px-2 py-1 rounded text-sm ${layout === "list" && "dark:text-slate-300"}`}>
							{topic}
						</div>
					))}
				</div>
			</div>

			<div
				className={`${layout === "list" && "hidden"} absolute -top-5 w-30 h-10 bg-slate-200/50 z-10`}
			/>
		</a>
	);
}
